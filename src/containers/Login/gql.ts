import { gql } from "@apollo/client";

export const AUTH = gql`
  mutation AuthMutation($email: String!, $password: String!) {
    Auth(email: $email, password: $password) {
      token
      error
    }
  }
`;
