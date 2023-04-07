const { AuthenticationError } = require('apollo-server-express');
const { User, Recipes, Reactions, Comments } = require('../models');
// const { signToken } = require('../utils/auth');

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
    getOneComment: async (parent, { postId }) => {
      return Comments.findOne({ _id: postId });
    },
    getReactionsByRecipeId: async (parent, { recipeId }) => {
        return Reactions.find({ recipe: recipeId }).populate('user');
      },
    },
  

  //Define mutation resolvers
  
  Mutation: {
    //Create a new user
    createUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    //login a user
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

    //select a recipe
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

    //create a recipe
    createRecipe: async (parent, { input }) => {
      const recipe = await Recipes.create(input);
      return recipe;
    },

    //remove a recipe
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

    //update recipe
    updateRecipe: async (parent, { input }) => {
      const recipe = await Recipes.findOneAndUpdate({ _id: input._id }, input, { new: true });
      return recipe;
    },
  
      createComment: async (parent, { postId, body }, context) => {
        if (context.user) {
          const user = await User.findOne({ username: context.user.username });
          const newComment = new Comment({
            body,
            username: context.user.username,
            createdAt: new Date().toISOString(),
          });
  
          const updatedPost = await Post.findOneAndUpdate(
            { _id: postId },
            { $push: { comments: newComment } },
            { new: true }
          ).populate('comments');
  
          return updatedPost;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
  
      deleteComment: async (parent, { postId, commentId }, context) => {
        if (context.user) {
          const updatedPost = await Post.findOneAndUpdate(
            { _id: postId },
            { $pull: { comments: { _id: commentId, username: context.user.username } } },
            { new: true }
          ).populate('comments');
  
          return updatedPost;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      createReaction: async (parent, { input }, context) => {
        const userId = getUserId(context);
        if (!userId) {
          throw new AuthenticationError('You need to be logged in to create a reaction!');
        }
  
        const { recipe, type } = input;
        const existingReaction = await Reactions.findOne({ user: userId, recipe });
        if (existingReaction) {
          throw new Error('You have already reacted to this recipe!');
        }
  
        const reaction = await Reactions.create({ user: userId, recipe, type });
  
        return reaction;
      },
      // Remove a reaction for a recipe
      removeReaction: async (parent, { recipeId }, context) => {
        const userId = getUserId(context);
        if (!userId) {
          throw new AuthenticationError('You need to be logged in to remove a reaction!');
        }
  
        const reaction = await Reactions.findOneAndDelete({ user: userId, recipe: recipeId });
        if (!reaction) {
          throw new Error('You have not reacted to this recipe yet!');
        }
  
        return reaction;
    }
    },
  };
  
  
  
  
  
  
  
  module.exports = resolvers;
  



