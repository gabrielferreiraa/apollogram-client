/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCurrentUserPosts
// ====================================================

export interface GetCurrentUserPosts_posts_user {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  picture: string | null;
}

export interface GetCurrentUserPosts_posts {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  isOwner: boolean;
  user: GetCurrentUserPosts_posts_user;
}

export interface GetCurrentUserPosts {
  posts: GetCurrentUserPosts_posts[];
}

export interface GetCurrentUserPostsVariables {
  user: string;
}
