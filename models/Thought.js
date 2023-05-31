const { Schema, Types } = require('mongoose');

// Schema to create new thought
const ThoughtSchema = new Schema(
    {
        reaction_id: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
          },
        thoughtText: {
            type: String,
            required: true,
            allowNull: false,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            required: true,
        },
        username: {
            type: String,
            required: true
        },
        reactions: [
            {
              type: Schema.Types.ObjectId,
              ref: "Reaction",
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
)

ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema)

module.exports = Thought