const { Schema, model, Types } = require('mongoose');

// Schema to create new thought
const thoughtSchema = new Schema(
    {
        thought_id: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
            unique: true,
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
        name: {
            type: String,
            required: true,
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
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;