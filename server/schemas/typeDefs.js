const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID!
    name: String
    username: String!
    email: String!
    recipeCount: Int
    savedRecipes: [Recipe]
}

type Recipe {
    _id: ID!
    name: String
    imgUrl: String
    createdAt: String
    instructions: String
    recipeCreator: User
    reactions: [Reaction]
    comments: [Comment]
    ingredients: [String]
    reactionCount: Int
}

type Auth {
    token: ID!
    user: User
}

type Comment {
    _id: ID!
    commentText: String!
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
    steps: [String]
    totalTime: Int
    serves: Int
}

input UpdateRecipeInput {
    _id: String!
    image: String
    name: String
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
    me: User
    getRecipes: [Recipe]
    getOneRecipe(_id: ID!): Recipe
    getRecipesByIds(_id: [ID]!): [Recipe]
    getComments: [Comment]
    getReactionsByRecipeId(recipeId: ID!): [Reaction]
    recipe(_id: ID!): Recipe
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(name: String!, username: String!, email: String!, password: String!): Auth
    selectRecipe(_id: String!): User
    createRecipe(input: RecipeInput!): Recipe
    removeRecipe(_id: ID!): Recipe
    updateRecipe(input: UpdateRecipeInput!): Recipe
    deleteRecipe(_id: ID!): Recipe
    createComment(commentText: String!, username: String!, createdAt: String!): Comment!
    deleteComment(_id: ID!): Comment!
    createReaction(reactionInput: ReactionInput): Reaction
    removeReaction(reactionId: ID!): Boolean
}
`;

module.exports = typeDefs;
