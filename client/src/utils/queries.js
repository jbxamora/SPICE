import { gql } from '@apollo/client';

export const GET_RECIPE = gql`
  query {
    getRecipes {
      _id
      name
      imgUrl
      instructions
      ingredients
    }
  }
`;
