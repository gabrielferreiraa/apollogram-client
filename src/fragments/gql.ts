import { gql } from "@apollo/client";

export const USER_FRAGMENT = gql`
  fragment User on User {
    id
    name
    email
    picture
  }
`;

export const POST_FRAGMENT = gql`
  fragment Post on Post {
    id
    title
    content
    user {
      ...User
    }
  }
  ${USER_FRAGMENT}
`;
