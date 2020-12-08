/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateUserMutation
// ====================================================

export interface CreateUserMutation_CreateUser {
  __typename: "User";
  id: string;
  name: string;
}

export interface CreateUserMutation {
  CreateUser: CreateUserMutation_CreateUser | null;
}

export interface CreateUserMutationVariables {
  name: string;
  email: string;
  password: string;
  picture?: string | null;
}
