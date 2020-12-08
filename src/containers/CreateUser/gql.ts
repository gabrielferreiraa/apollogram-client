import { gql } from "@apollo/client";

import { USER_FRAGMENT } from "../../fragments/gql";

export const CREATE_USER = gql`
  mutation CreateUserMutation(
    $name: String!
    $email: String!
    $password: String!
    $picture: String
  ) {
    CreateUser(
      name: $name
      email: $email
      password: $password
      picture: $picture
    ) {
      ... on User {
        id
        name
      }
    }
  }

  ${USER_FRAGMENT}
`;
