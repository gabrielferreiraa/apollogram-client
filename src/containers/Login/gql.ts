import { gql } from "@apollo/client";

export const AUTH = gql`
  mutation AuthMutation($email: String!, $password: String!) {
    auth(email: $email, password: $password) {
      token
    }
  }
`;
