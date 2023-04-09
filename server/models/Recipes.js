const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reactions");

const RecipeSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
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

    recipeCreator: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    reactions: [reactionSchema],

    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

RecipeSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Recipe = model("Recipe", RecipeSchema);

module.exports = Recipe;
