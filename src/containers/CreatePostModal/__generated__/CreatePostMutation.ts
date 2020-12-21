/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreatePostMutation
// ====================================================

export interface CreatePostMutation_createPost_user {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  picture: string | null;
}

export interface CreatePostMutation_createPost {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  isOwner: boolean;
  user: CreatePostMutation_createPost_user;
}

export interface CreatePostMutation {
  createPost: CreatePostMutation_createPost;
}

export interface CreatePostMutationVariables {
  title: string;
  content: string;
}
