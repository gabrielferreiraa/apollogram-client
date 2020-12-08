/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllPostsQuery
// ====================================================

export interface GetAllPostsQuery_getAllPosts_user {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  picture: string | null;
}

export interface GetAllPostsQuery_getAllPosts {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  user: GetAllPostsQuery_getAllPosts_user;
}

export interface GetAllPostsQuery {
  getAllPosts: (GetAllPostsQuery_getAllPosts | null)[];
}
