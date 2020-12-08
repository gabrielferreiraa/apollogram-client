import { gql } from "@apollo/client";

import { USER_FRAGMENT } from "../../fragments/gql";

export const GET_AUTENTICATED_USER = gql`
  query GetAutenticatedUserQuery {
    getAutenticatedUser {
      ...User
    }
  }
  ${USER_FRAGMENT}
`;
