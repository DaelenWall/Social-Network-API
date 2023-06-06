const { Schema, model, Types } = require('mongoose');

// Schema to create new thought
const thoughtSchema = new Schema(
    {
        thought_id: {
            type: Schema.Types.ObjectId,
            unique: true,
        },
        user_id: {
            type: String,
            required: true
        },
        thoughtText: {
            type: String,
            required: true,
            allowNull: false,
        },
        createdAt: {
            type: Date,
            required: true,
        },
        reactions: [
            {
                type: Schema.Types.ObjectId,
                unique: true,
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