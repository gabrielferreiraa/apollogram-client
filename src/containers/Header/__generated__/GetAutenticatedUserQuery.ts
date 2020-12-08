/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAutenticatedUserQuery
// ====================================================

export interface GetAutenticatedUserQuery_getAutenticatedUser {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  picture: string | null;
}

export interface GetAutenticatedUserQuery {
  getAutenticatedUser: GetAutenticatedUserQuery_getAutenticatedUser | null;
}
