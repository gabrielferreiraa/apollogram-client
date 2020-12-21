import { gql } from "@apollo/client";

export const USER_FRAGMENT = gql`
  fragment UserFields on User {
    id
    name
    email
    picture
  }
`;

export const POST_FRAGMENT = gql`
  fragment PostFields on Post {
    id
    title
    content
    isOwner
    user {
      ...UserFields
    }
  }

  ${USER_FRAGMENT}
`;
