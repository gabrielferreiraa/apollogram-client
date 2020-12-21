import { gql } from "@apollo/client";

import { POST_FRAGMENT } from "../../fragments/gql";

export const GET_ALL_POSTS = gql`
  query GetAllPosts {
    posts {
      ...PostFields
    }
  }

  ${POST_FRAGMENT}
`;

export const GET_CURRENT_USER_POSTS = gql`
  query GetCurrentUserPosts($user: ID!) {
    posts(filter: { user: $user }) {
      ...PostFields
    }
  }

  ${POST_FRAGMENT}
`;

export const DELETE_POST = gql`
  mutation DeletePostMutation($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`;
