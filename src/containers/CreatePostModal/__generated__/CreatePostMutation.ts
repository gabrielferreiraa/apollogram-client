/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreatePostMutation
// ====================================================

export interface CreatePostMutation_CreatePost {
  __typename: "Post";
  title: string;
  content: string;
}

export interface CreatePostMutation {
  CreatePost: CreatePostMutation_CreatePost | null;
}

export interface CreatePostMutationVariables {
  title: string;
  content: string;
}
