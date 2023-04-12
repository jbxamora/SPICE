import { gql } from '@apollo/client';

export const GET_RECIPE = gql`
  query {
    getRecipe {
      _id
      name
      imgUrl
      recipeCreator{
        name
      }
      instructions
      ingredients
    }
  }
`;