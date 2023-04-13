import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name:String!,$username: String!, $email: String!, $password: String!) {
    addUser(name: $name, username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_RECIPE = gql`
  mutation addRecipe(
    $name: String! 
    $ingredients: [String!]! 
    $instructions: String!
    $imgUrl: String!
  ) {
    addRecipe(name: $name, ingredients: $ingredients, instructions: $instructions, imgUrl: $imgUrl) {
    _id
    name
    ingredients
    instructions
    recipeAuthor
    imgUrl
    createdAt
  }
}
`;

export const ADD_COMMENT = gql`
  mutation AddComment($recipeId: ID!, $commentText: String!) {
    addComment(recipeId: $recipeId, commentText: $commentText) {
      _id
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation RemoveComment($recipeId: ID!, $commentId: ID!) {
    removeComment(recipeId: $recipeId, commentId: $commentId) {
      _id
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;









