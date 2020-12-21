/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeletePostMutation
// ====================================================

export interface DeletePostMutation_deletePost {
  __typename: "Post";
  id: string;
}

export interface DeletePostMutation {
  deletePost: DeletePostMutation_deletePost | null;
}

export interface DeletePostMutationVariables {
  id: string;
}
