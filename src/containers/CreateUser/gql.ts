import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUserMutation(
    $name: String!
    $email: String!
    $password: String!
    $picture: String
  ) {
    createUser(
      name: $name
      email: $email
      password: $password
      picture: $picture
    ) {
      id
      name
    }
  }
`;
