const { AuthenticationError } = require('apollo-server-express');
const { User, Comment, Recipe, Reaction } = require('../models');
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
      return Recipe.find().sort({ createdAt: -1 });
    },
    getOneRecipe: async (parent, { _id }) => {
      return Recipe.findOne({ _id });
    },
    getRecipesByIds: async (parent, { _id }) => {
      return Recipe.find({ _id: { $in: _id } }).sort({ createdAt: -1 });
    },
    getPosts: async () => {
      return Post.find().sort({ createdAt: -1 });
    },
    getPost: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
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
      const recipe = await Recipe.create(input);
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
      const recipe = await Recipe.findOneAndUpdate({ _id: input._id }, input, { new: true });
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
  
      likeRecipe: async (parent, { recipeId }, context) => {
        if (context.user) {
          const recipe = await recipe.findById(recipeId);
  
          if (!recipe) {
            throw new UserInputError('Recipe not found!');
          }
  
          if (recipe.likes.find((like) => like.username === context.user.username)) {
            // Post already liked, unlike it
            recipe.likes = recipe.likes.filter((like) => like.username !== context.user.username);
          } else {
            // Not liked, like recipe
            recipe.likes.push({
              username: context.user.username,
              createdAt: new Date().toISOString(),
            });
          }
  
          const updatedRecipe = await recipe.save().populate('comments');
  
          return updatedRecipe;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
    },
  };
  
  module.exports = resolvers;
  



