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
   imgUrl: String
   createdAt: String
   recipeCreator: User!
   reactions: [Reaction!]!
   comments: [Comment!]!
   reactionCount: Int!
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
    reactionId: ID!
    reactionBody: String!
    createdAt: String!
    username: String!
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
  input ReactionInput {
    reactionBody: String!
  }

  input CommentInput {
    commentBody: String!
  } 
   
  
  type Query {
    users: [User]
    user(username: String!): User
    recipes: [Recipe!]!
    recipe(recipeId: ID!): Recipe
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
