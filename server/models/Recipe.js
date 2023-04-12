const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    ingredients: [
        {
            type: String,
            required: true,
        },
    ],
    instructions: {
        type: String,
        required: true,
    },
    imgUrl: { type: String },

    recipeAuthor: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    comments: [
        {
            commentText: {
                type: String,
                required: true,
                minlength: 1,
                maxlength: 280,
            },
            commentAuthor: {
                type: String,
                required: true,
            },
            createdAt: {
                type: Date,
                default: Date.now,
                get: (timestamp) => dateFormat(timestamp),
            },
        },
    ],
});

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;
