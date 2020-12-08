import { gql } from "@apollo/client";
import { USER_FRAGMENT, POST_FRAGMENT } from "../../fragments/gql";

export const GET_ALL_POSTS = gql`
  query GetAllPostsQuery {
    getAllPosts {
      ...Post
      user {
        ...User
      }
    }
  }
  ${POST_FRAGMENT}
  ${USER_FRAGMENT}
`;

export const GET_LOGGED_USER_POSTS = gql`
  query GetLoggedUserPostsQuery {
    getLoggedUserPosts {
      ...Post
      user {
        ...User
      }
    }
  }
  ${POST_FRAGMENT}
  ${USER_FRAGMENT}
`;

export const DELETE_POST = gql`
  mutation DeletePostMutation($id: ID!) {
    DeletePost(id: $id) {
      ... on Post {
        id
      }
    }
  }
  ${POST_FRAGMENT}
`;
