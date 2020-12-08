/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AuthMutation
// ====================================================

export interface AuthMutation_Auth {
  __typename: "Auth";
  token: string | null;
  error: string | null;
}

export interface AuthMutation {
  Auth: AuthMutation_Auth | null;
}

export interface AuthMutationVariables {
  email: string;
  password: string;
}
