/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeletePostMutation
// ====================================================

export interface DeletePostMutation_DeletePost {
  __typename: "Post";
  id: string;
}

export interface DeletePostMutation {
  DeletePost: DeletePostMutation_DeletePost | null;
}

export interface DeletePostMutationVariables {
  id: string;
}
