/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PostFields
// ====================================================

export interface PostFields_user {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  picture: string | null;
}

export interface PostFields {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  isOwner: boolean;
  user: PostFields_user;
}
