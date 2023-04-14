const { AuthenticationError, ApolloError } = require('apollo-server-express');
const { User, Recipe, reactionSchema, Comment } = require('../models');
const { signToken } = require('../utils/auth');



const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('recipes');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('recipes');
    },
    //Define query resolvers
    recipes: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Recipe.find(params).sort({ createdAt: -1 });
    },
    recipe: async (parent, { recipeId }) => {
      return Recipe.findOne({ _id: recipeId });
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('recipes');
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    getComments: async () => {
      return Comment.find().sort({ createdAt: -1 });
    },
    getReactionsByRecipeId: async (parent, { recipeId }) => {
      return reactionSchema.find({ recipe: recipeId }).populate('user');
    },
  },


  //Define mutation resolvers
  Mutation: {
    // Create a new user
    addUser: async (parent, { name, username, email, password }) => {
      const user = await User.create({ name, username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    // Login a user
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    // Create a recipe
    addRecipe: async (parent, { name, ingredients, instructions, imgUrl }, context) => {
      if (context.user) {
        const recipe = await Recipe.create({
          name,
          ingredients,
          instructions,
          imgUrl,
          recipeAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { recipes: recipe._id } }
        );

        return recipe;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    // Create a comment
    addComment: async (parent, { recipeId, commentText }, context) => {
      if (context.user) {
        return Recipe.findOneAndUpdate(
          { _id: recipeId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      
      throw new AuthenticationError('You need to be logged in!');
    },
    // Remove a recipe
    removeRecipe: async (parent, { recipeId }, context) => {
      if (context.user) {
        // Find the recipe
        const recipe = await Recipe.findByIdAndDelete(recipeId);

        if (!recipe) {
          throw new Error('Recipe not found');
        }

        // Check if the logged-in user is the recipe author
        if (recipe.recipeAuthor === context.user.username) {
          // Remove the recipe from the user's recipes field
          await User.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { recipes: recipe._id } }
          );

          // Remove the recipe from the Recipe collection
          await Recipe.findByIdAndDelete(recipeId);

          return recipe;
        } else {
          throw new AuthenticationError('You are not authorized to delete this recipe');
        }
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // Update a recipe
    updateRecipe: async (parent, { input }) => {
      const recipe = await Recipe.findOneAndUpdate({ _id: input._id }, input, { new: true });
      return recipe;
    },
    //create comment
    removeComment: async (parent, { recipeId, commentId }, context) => {
      if (context.user) {
        return Recipe.findOneAndUpdate(
          { _id: recipeId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    createReaction: async (parent, { reactionInput }, context) => {
      if (!reactionInput.recipeId) {
        throw new Error('recipeId is required');
      }

      if (context.user) {
        const { recipeId, reactionBody } = reactionInput;
        const reaction = await Recipe.findOneAndUpdate(
          { _id: recipeId },
          { $push: { reactions: { reactionBody, username: context.user.username } } },
          { new: true }
        );
        return reaction;
      }
      throw new AuthenticationError('You need to be logged in to create a reaction!');
    },
    removeReaction: async (parent, { reactionId }, context) => {
      if (context.user) {
        const recipe = await Recipe.findOneAndUpdate(
          { "reactions.reactionId": reactionId, "reactions.username": context.user.username },
          { $pull: { reactions: { reactionId } } },
          { new: true }
        );

        if (recipe) {
          return true;
        } else {
          throw new ApolloError("You have not reacted to this recipe");
        }
      } else {
        throw new AuthenticationError("You must be logged in to remove a reaction");
      }
    },
  saveRecipe: async (parent, {
    recipeId,
    name,
    ingredients,
    instructions,
    imgUrl,
  }, context) => {
    if (context.user) {
      const updatedUser = await User.findByIdAndUpdate(
        { _id: context.user._id },
        {
          $push: {
            savedRecipes: {
              recipeId,
              name,
              ingredients,
              instructions,
              imgUrl,
            }
          }
        },
        { new: true }
      );
      return updatedUser;
    }
    throw new AuthenticationError('You need to be logged in!');
  },
  removeSavedRecipe: async (parent, { recipeId }, context) => {
    if (context.user) {
      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { savedRecipes: { recipeId } } },
        { new: true }
      );

      return updatedUser;
    }

    throw new AuthenticationError('You need to be logged in!');
  },
},
};

// deleteRecipe: async (parent, { recipeId }, context) => {
//   const user = checkAuth(context);

//   try {
//     const recipe = await Recipe.findById(recipeId);
//     if (!recipe) {
//       throw new Error('Recipe not found');
//     }
//     if (user.username !== recipe.username) {
//       throw new AuthenticationError('Action not allowed');
//     }
//     await recipe.delete();
//     return recipe;
//   } catch (err) {
//     throw new Error(err);
//   }
// },


module.exports = resolvers;