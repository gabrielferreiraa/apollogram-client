/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllPosts
// ====================================================

export interface GetAllPosts_posts_user {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  picture: string | null;
}

export interface GetAllPosts_posts {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  isOwner: boolean;
  user: GetAllPosts_posts_user;
}

export interface GetAllPosts {
  posts: GetAllPosts_posts[];
}
