import React from "react";
import { useMutation } from "@apollo/client";
import {
  Dialog,
  Classes,
  Button,
  FormGroup,
  InputGroup,
  TextArea,
} from "@blueprintjs/core";

import { GET_ALL_POSTS } from "../Feed/gql";
import { CREATE_POST } from "./gql";
import {
  CreatePostMutation,
  CreatePostMutationVariables,
} from "./__generated__/CreatePostMutation";

type CreatePostModalProps = {
  isOpen: boolean;
  onClose(): void;
};
const CreatePostModal: React.FC<CreatePostModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [values, setValues] = React.useState({
    title: "",
    content: "",
  });
  const [createPost, { loading }] = useMutation<
    CreatePostMutation,
    CreatePostMutationVariables
  >(CREATE_POST);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    createPost({
      variables: {
        title: values.title,
        content: values.content,
      },
      refetchQueries: [{ query: GET_ALL_POSTS }],
    });
    onClose();
    setValues({ title: "", content: "" });
  };

  const handleChange = React.useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues({
        ...values,
        [target.name]: target.value,
      });
    },
    [values]
  );

  return (
    <Dialog
      icon="add"
      title="Create Post"
      isOpen={isOpen}
      onClose={onClose}
      canEscapeKeyClose
      canOutsideClickClose
      autoFocus
      usePortal
    >
      <form onSubmit={handleSubmit}>
        <div className={Classes.DIALOG_BODY}>
          <div>
            <FormGroup label="Title" labelFor="title">
              <InputGroup
                id="title"
                name="title"
                placeholder="Post Title"
                value={values.title}
                onChange={handleChange}
              />
            </FormGroup>
          </div>
          <div>
            <FormGroup label="Content" labelFor="content">
              <TextArea
                id="content"
                name="content"
                placeholder="Post content..."
                value={values.content}
                onChange={handleChange}
                growVertically
                fill
              />
            </FormGroup>
          </div>
        </div>
        <div className={Classes.DIALOG_FOOTER}>
          <div className={Classes.DIALOG_FOOTER_ACTIONS}>
            <Button intent="none" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" intent="success" loading={loading}>
              Save
            </Button>
          </div>
        </div>
      </form>
    </Dialog>
  );
};

export default CreatePostModal;
