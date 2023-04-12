import { gql } from '@apollo/client';


//why dont we have queries??
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

export const CREATE_RECIPE = gql`
  mutation createRecipe($input: RecipeInput) {
    createRecipe(input: $input) {imgUrl}
  }
`;
















