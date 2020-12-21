import { gql } from "@apollo/client";

import { POST_FRAGMENT } from "../../fragments/gql";

export const CREATE_POST = gql`
  mutation CreatePostMutation($title: String!, $content: String!) {
    createPost(title: $title, content: $content) {
      ...PostFields
    }
  }

  ${POST_FRAGMENT}
`;
