const { User, Thought, Reaction } = require('../models');

module.exports = {
  // Get all thoughts
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a single thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thought_id })

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.user_id },
        { $addToSet: { thoughts: thought._id } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({
          message: 'Thought created, but found no user with that ID',
        });
      }

      res.json('Created the thought');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Delete a thought
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndRemove({ _id: req.params.thought_id });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }

      const user = await User.findOneAndUpdate(
        { thoughts: req.params.user_id },
        { $pull: { thoughts: req.params.thought_id } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ message: 'Thought deleted!' });
      }

      res.json({ message: 'Thought successfully deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a thought
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thought_id },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }

      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Add a reaction
  async addThoughtReaction(req, res) {
    try {
      const reaction = await Reaction.create(req.body)
      const thought = await Thought.findOneAndUpdate(
        { _id: req.body.thought_id },
        { $addToSet: { reactions: reaction._id } },
        { new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }
      if (!reaction) {
        return res.status(404).json({ message: 'No reaction with this id!' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Remove a reaction
  async removeThoughtReaction(req, res) {
    try {
      const thought = await Thought.findOneAndRemove(
        { _id: req.params.thought_id },
        { $pull: { reactions: { reaction_id: req.params.reaction_id } } },
        { runValidators: true, new: true }
      )

      if (!thought || !user) {
        return res.status(404).json({ message: 'Reaction deleted!' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleThoughtReaction(req, res) {
    try {
      const thoughtReaction = await Reaction.findOne(req.body)
      res.json(thoughtReaction);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a single thought
  async getAllThoughtReactions(req, res) {
    try {
      const thoughtReactions = await Reaction.find()
      res.json(thoughtReactions);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
