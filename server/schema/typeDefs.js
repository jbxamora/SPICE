const { gql } = require('apollo-server-express');

const typeDefs = gql`
   type User {
    _id: ID!
    username: String!
    email: String!
    recipeCount: Int
    selectedRecipeIds:[ID]
  }

  type Recipe {
   _id: ID!
   name: String
   image: String
   createdAt: String
   ingredients: [IngredientInput]
   steps: [String]
   totalTime: Int
   serves: Int
  }

  type Auth {
    token: ID!
    user: User
  } 

  type Comment {
    id: ID!
    body: String!
    username: String!
    createdAt: String!
  }

  type Reaction {
    id: ID!
    username: String!
    createdAt: String!
  }

  type Post {
    id: ID!
    body: String!
    username: String!
    createdAt: String!
    comments: [Comment]
    reactions: [Reaction]
  }

  type Query {
    me: User
    getRecipes: [Recipe]
    getOneRecipe(_id: ID!): Recipe! 
    getRecipesByIds(_id: [ID]!): [Recipe] 
    getPosts: [Post]
    getPost(postId: ID!): Post
  }
   
  input RecipeInput {
    _id: String!
    image: String
    name: String
    ingredients: [IngredientInput]
    steps: [String]
    totalTime: Int
    serves: Int
  }

  input UpdateRecipeInput {
    _id: String!
    image: String
    name: String
    ingredients: [IngredientInput]
    steps: [String]
    totalTime: Int
    serves: Int
    createdAt: String
  }

   type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    selectRecipe(_id: String!): User
    createRecipe(input: RecipeInput!): Recipe
    removeRecipe(_id: ID!): Recipe
    updateRecipe(input: UpdateRecipeInput!): Recipe
    deleteRecipe(_id: ID!): Recipe

    createPost(body: String!): Post
    deletePost(postId: ID!): String
    createComment(postId: String, body: String): Post
    deleteComment(postId: String, commentId: String): Post
    likePost(postId: String!): Post
   }
`;

module.exports = typeDefs;
