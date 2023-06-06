const { Schema, model, Types } = require('mongoose')

// Schema to create new reaction
const reactionSchema = new Schema(
    {
        reaction_id: {
            type: Schema.Types.ObjectId,
            unique: true,
        },
        thought_id: {
            type: String,
            required: true
        },
        reactionText: {
            type: String,
            required: true,
            allowNull: false,
        },
        createdAt: {
            type: Date,
            required: true,
        },


    },
);


const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;

