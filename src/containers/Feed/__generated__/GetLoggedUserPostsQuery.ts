/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLoggedUserPostsQuery
// ====================================================

export interface GetLoggedUserPostsQuery_getLoggedUserPosts_user {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  picture: string | null;
}

export interface GetLoggedUserPostsQuery_getLoggedUserPosts {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  user: GetLoggedUserPostsQuery_getLoggedUserPosts_user;
}

export interface GetLoggedUserPostsQuery {
  getLoggedUserPosts: (GetLoggedUserPostsQuery_getLoggedUserPosts | null)[] | null;
}
