/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Post
// ====================================================

export interface Post_user {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  picture: string | null;
}

export interface Post {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  user: Post_user;
}
