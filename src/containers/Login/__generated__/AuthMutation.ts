/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AuthMutation
// ====================================================

export interface AuthMutation_auth {
  __typename: "Token";
  token: string;
}

export interface AuthMutation {
  auth: AuthMutation_auth | null;
}

export interface AuthMutationVariables {
  email: string;
  password: string;
}
