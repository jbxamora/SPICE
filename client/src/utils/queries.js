import { gql } from '@apollo/client';

export const GET_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      recipes {
        _id
        recipeText
        createdAt
      }
    }
  }
`;

export const QUERY_RECIPES = gql`
  query getRecipes {
    recipes {
      _id
      name
      ingredients
      instructions
      imgUrl
      recipeAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_RECIPE = gql`
  query getSingleRecipe($recipeId: ID!) {
    recipe(recipeId: $recipeId) {
      _id
      name
      ingredients
      instructions
      imgUrl
      recipeAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      recipes {
        _id
        name
        ingredients
        instructions
        imgUrl
        recipeAuthor
        createdAt
      }
    }
  }
`;