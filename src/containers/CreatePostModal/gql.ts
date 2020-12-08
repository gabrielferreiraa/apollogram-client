import { gql } from "@apollo/client";

import { POST_FRAGMENT } from "../../fragments/gql";

export const CREATE_POST = gql`
  mutation CreatePostMutation($title: String!, $content: String!) {
    CreatePost(title: $title, content: $content) {
      ... on Post {
        title
        content
      }
    }
  }

  ${POST_FRAGMENT}
`;
