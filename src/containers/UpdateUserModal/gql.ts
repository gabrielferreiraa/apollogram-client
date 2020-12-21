import { gql } from "@apollo/client";

import { USER_FRAGMENT } from "../../fragments/gql";

export const UPDATE_USER = gql`
  mutation UpdateUserMutation(
    $name: String!
    $email: String!
    $picture: String
  ) {
    updateUser(name: $name, email: $email, picture: $picture) {
      ...UserFields
    }
  }

  ${USER_FRAGMENT}
`;
