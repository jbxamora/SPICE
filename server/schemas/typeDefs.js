const { gql } = require("apollo-server-express");

const typeDefs = gql`

  type User {
    _id: ID
    username: String
    email: String
    password: String
    recipe: [Recipe]!
  }

  type Recipe {
    _id: ID
    name: String
    ingredients: [String!]!
    instructions: String
    imgUrl: String
    recipeAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Reaction {
    reactionId: ID!
    reactionBody: String
    createdAt: String!
    username: String!
  }


  input UpdateRecipeInput {
    _id: String!
    name: String
    imgUrl: String
    instructions: String!
    ingredients: [String!]!
  }

  input ReactionInput {
    reactionBody: String!
  }

  input CommentInput {
    commentText: String!
  }

  type Query {
    me: User
    user(username: String!): User
    users: [User]
    recipes(username: String): [Recipe]
    recipe(recipeId: ID!): Recipe
    getComments: [Comment]
    getReactionsByRecipeId(recipeId: ID!): [Reaction]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(name: String!, username: String!, email: String!, password: String!): Auth
    selectRecipe(_id: String!): User
    addRecipe(name: String!, ingredients: [String!]!, instructions: String!, imgUrl: String): Recipe
    removeRecipe(recipeId: ID!): Recipe
    updateRecipe(input: UpdateRecipeInput!): Recipe
    deleteRecipe(recipeId: ID!): Recipe
    addComment(recipeId: ID!, commentText: String!): Recipe
    removeComment(recipeId: ID!, commentId: ID!): Recipe
    createReaction(reactionInput: ReactionInput): Recipe
    removeReaction(reactionId: ID!): Boolean
  }
`;

module.exports = typeDefs;