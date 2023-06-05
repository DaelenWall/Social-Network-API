const { Schema, model, Types } = require('mongoose')

// Schema to create new reaction
const reactionSchema = new Schema(
    {
        reaction_id: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
            unique: true,
        },
        reactionText: {
            type: String,
            required: true,
            allowNull: false,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        name: {
            type: String,
            required: true
        },

    },
);


const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;

