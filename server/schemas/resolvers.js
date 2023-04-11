const { AuthenticationError, ApolloError } = require('apollo-server-express');
const { User, Recipes, reactionSchema, Comment } = require('../models');
const { signToken } = require('../utils/auth');
const { PubSub } = require('graphql-subscriptions');
const pubsub = new PubSub();
const RECIPE_UPDATED = "RECIPE_UPDATED";



const resolvers = {
  Query: {

    //Define query resolvers
    recipe: async (parent, { _id }, context) => {
      const recipe = await Recipes.findById(_id)
        .populate('recipeCreator')
        .populate({
          path: 'comments',
          populate: {
            path: 'commentAuthor',
          },
        })
        .populate('reactions');
      return recipe;
    },
  
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('selectedRecipeIds');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    user: async (parent, {userId})=> {
      return User.findOne({_id: profileId});
    },
    getAllUsers: async (parent, args) => {
      return User.find().sort({ createdAt: -1 });
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
    createRecipe: async (parent, { input }, context) => {
      const recipe = await Recipes.create({...input,recipeCreator: context.user._id })
      console.log(recipe)
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
    //create comment
    createComment: async (parent, { commentText, username, createdAt }, context) => {
      if (context.user) {
        const comment = await Comments.create({
          commentText,
          username,
          createdAt,
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
    createReaction: async (parent, { reactionInput }, context) => {
      if (!reactionInput.recipeId) {
        throw new Error('recipeId is required');
      }
      
      if (context.user) {
        const { recipeId, reactionBody } = reactionInput;
        const reaction = await Recipes.findOneAndUpdate(
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
        const recipe = await Recipes.findOneAndUpdate(
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
  },
};

module.exports = resolvers;