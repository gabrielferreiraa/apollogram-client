import React from "react";
import { useMutation } from "@apollo/client";
import {
  Dialog,
  Classes,
  Button,
  FormGroup,
  InputGroup,
} from "@blueprintjs/core";
import { useFormik } from "formik";

import { UPDATE_USER } from "./gql";
import {
  UpdateUserMutation,
  UpdateUserMutationVariables,
} from "./__generated__/UpdateUserMutation";
import { validationSchema } from "./form";
import { useCurrentUser } from "contexts/UserContext";
import { showToast } from "utils/toaster";

type CreatePostModalProps = {
  isOpen: boolean;
  handleClose(): void;
};
const CreatePostModal: React.FC<CreatePostModalProps> = ({
  isOpen,
  handleClose,
}) => {
  const { me } = useCurrentUser();
  const [createPost, { loading }] = useMutation<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >(UPDATE_USER, {
    onCompleted: () => {
      showToast("User updated successfully", "success");
      handleClose();
    },
  });

  const onSubmit = (values: UpdateUserMutationVariables) => {
    createPost({ variables: values });
  };

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik<UpdateUserMutationVariables>({
    enableReinitialize: true,
    initialValues: {
      name: me?.name || "",
      email: me?.email || "",
      picture: me?.picture || "",
    },
    validationSchema,
    onSubmit,
  });

  return (
    <Dialog
      icon="edit"
      title="Update User"
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
            <FormGroup label="Name" labelFor="name">
              <InputGroup
                id="name"
                name="name"
                placeholder="Your name here..."
                value={values.name}
                onChange={handleChange}
              />
            </FormGroup>
          </div>
          <div>
            <FormGroup label="Email" labelFor="email">
              <InputGroup
                id="email"
                name="email"
                placeholder="Your email here..."
                value={values.email}
                onChange={handleChange}
              />
            </FormGroup>
          </div>
          <div>
            <FormGroup label="Picture URL" labelFor="picture">
              <InputGroup
                id="picture"
                name="picture"
                placeholder="Paste the picture URL here..."
                value={values.picture || ""}
                onChange={handleChange}
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
