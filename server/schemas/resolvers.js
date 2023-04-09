const { AuthenticationError } = require('apollo-server-express');
const { User, Recipes, Reactions, Comments } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {

    //Define query resolvers
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('selectedRecipeIds');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    getRecipes: async (parent, args) => {
      return Recipes.find().sort({ createdAt: -1 });
    },
    getOneRecipe: async (parent, { _id }) => {
      return Recipes.findOne({ _id });
    },
    getRecipesByIds: async (parent, { _id }) => {
      return Recipes.find({ _id: { $in: _id } }).sort({ createdAt: -1 });
    },
    getComments: async () => {
      return Comments.find().sort({ createdAt: -1 });
    },
    getReactionsByRecipeId: async (parent, { recipeId }) => {
      return Reactions.find({ recipe: recipeId }).populate('user');
    },
  },


  //Define mutation resolvers
  Mutation: {
    // Create a new user
    createUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
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
    // Select a recipe
    selectRecipe: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { selectedRecipeIds: _id } },
          { new: true }
        ).populate('selectedRecipeIds');
        return user;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // Create a recipe
    createRecipe: async (parent, { input }) => {
      const recipe = await Recipes.create(input);
      return recipe;
    },
    // Remove a recipe
    removeRecipe: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { selectedRecipeIds: _id } },
          { new: true }
        ).populate('selectedRecipeIds');
        return user;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // Update a recipe
    updateRecipe: async (parent, { input }) => {
      const recipe = await Recipes.findOneAndUpdate({ _id: input._id }, input, { new: true });
      return recipe;
    },
    // Create a comment
    createComment: async (parent, { commentText, username, recipeId }, context) => {
      if (context.user) {
        const comment = await Comments.create({
          commentText,
          username,
          recipeId,
          user: context.user._id
        });
        return comment;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // Delete a comment
    deleteComment: async (parent, { id }, context) => {
      if (context.user) {
        const comment = await Comments.findOneAndDelete({ _id: id, user: context.user._id });
        if (!comment) {
          throw new Error('You are not authorized to delete this comment!');
        }
        return comment;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // Create a reaction for a recipe
    createReaction: async (parent, { input }, context) => {
      if (context.user) {
        const { recipeId, type } = input;
        const reaction = await Reactions.create({ user: context.user._id, recipe: recipeId, type });
        return reaction;
      }
      throw new AuthenticationError('You need to be logged in to create a reaction!');
    },
    removeReaction: async (parent, { recipeId }, context) => {
      if (context.user) {
        const reaction = await Reactions.findOneAndDelete({
          recipeId: recipeId,
          userId: context.user._id
        });
    
        if (reaction) {
          // Update the recipe's reaction count
          const recipe = await Recipes.findById(recipeId);
          recipe.reactionCount--;
          await recipe.save();
    
          // Publish the updated recipe to the subscription
          pubsub.publish(RECIPE_UPDATED, { recipeUpdated: recipe });
    
          return true;
        } else {
          throw new ApolloError("You have not reacted to this recipe");
        }
      } else {
        throw new AuthenticationError("You must be logged in to remove a reaction");
      }
    }
  }
}




module.exports = resolvers;




