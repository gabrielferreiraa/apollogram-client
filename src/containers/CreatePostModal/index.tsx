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
import { useFormik } from "formik";

import { CREATE_POST } from "./gql";
import {
  CreatePostMutation,
  CreatePostMutationVariables,
} from "./__generated__/CreatePostMutation";
import { initialValues, validationSchema } from "./form";
import { showToast } from "utils/toaster";

type CreatePostModalProps = {
  isOpen: boolean;
  handleClose(): void;
};
const CreatePostModal: React.FC<CreatePostModalProps> = ({
  isOpen,
  handleClose,
}) => {
  const [createPost, { loading }] = useMutation<
    CreatePostMutation,
    CreatePostMutationVariables
  >(CREATE_POST, {
    onCompleted: () => {
      showToast("Post created successfully", "success");
      handleClose();
    },
  });

  const onSubmit = (values: typeof initialValues) => {
    createPost({ variables: values });
  };

  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Dialog
      icon="add"
      title="Create Post"
      isOpen={isOpen}
      onClose={handleClose}
      canEscapeKeyClose
      canOutsideClickClose
      autoFocus
      usePortal
    >
      <form onSubmit={handleSubmit}>
        <div className={Classes.DIALOG_BODY}>
          <div>
            <FormGroup
              label="Title"
              labelFor="title"
              helperText={errors.title}
              intent={!!errors.title ? "danger" : "none"}
            >
              <InputGroup
                id="title"
                name="title"
                placeholder="Post Title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormGroup>
          </div>
          <div>
            <FormGroup
              label="Content"
              labelFor="content"
              helperText={errors.content}
              intent={!!errors.content ? "danger" : "none"}
            >
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
            <Button intent="none" onClick={handleClose}>
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
