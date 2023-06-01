const { User, Thought, Reaction } = require('../models');

module.exports = {
  // Get all users
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a single user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.user_id })
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a user - may need to return as reactions to thoughts are not properly called
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.user_id });
      if (!user) {
        res.status(404).json({ message: 'No user with that ID' });
      }

      await Thought.deleteMany({ _id: { $in: user.thoughts } });
      await Reaction.deleteMany({ _id: { $in: thought.reactions } })
      res.json({ message: 'User and thoughts deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a user
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.user_id },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        res.status(404).json({ message: 'No user with this id!' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Add a friend
  async addFriend(req, res) {
    try {
      const friend = await User.findOneAndUpdate({ _id: params.user_id }, { $push: { friends: params.friend_id } }, { new: true, runValidators: true });
      res.json(friend);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Remove a friend
  async removeFriend(req, res) {
    try {
      const friend = await User.findOneAndUpdate({ _id: params.user_id}, { $pull: { friends: params.friend_id} });
      if (!friend) {
        res.status(404).json({ message: 'No friend with that ID' });
      }

      res.json({ message: 'Friend removed!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
