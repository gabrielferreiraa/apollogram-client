import React, { ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { FormGroup, InputGroup, Button } from "@blueprintjs/core";
import { useHistory } from "react-router-dom";

import { Container } from "./CreateUser.styles";
import { CREATE_USER } from "./gql";
import {
  CreateUserMutation,
  CreateUserMutationVariables,
} from "./__generated__/CreateUserMutation";

const Login: React.FC = () => {
  const history = useHistory();
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    password: "",
    picture: "",
  });
  const [createUser, { data, loading }] = useMutation<
    CreateUserMutation,
    CreateUserMutationVariables
  >(CREATE_USER);

  React.useEffect(() => {
    if (data?.CreateUser?.id) history.push("/");
  }, [data, history]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    createUser({
      variables: {
        name: values.name,
        email: values.email,
        password: values.password,
        picture: values.picture,
      },
    });
  };

  const handleChange = React.useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      setValues({
        ...values,
        [target.name]: target.value,
      });
    },
    [values]
  );

  return (
    <Container>
      <form onSubmit={handleSubmit}>
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
          <FormGroup label="Password" labelFor="password">
            <InputGroup
              type="password"
              id="password"
              name="password"
              placeholder="Your password here..."
              value={values.password}
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
              value={values.picture}
              onChange={handleChange}
            />
          </FormGroup>
        </div>
        <Button
          type="submit"
          intent="success"
          icon="add"
          loading={loading}
          fill
        >
          Create
        </Button>
      </form>
    </Container>
  );
};

export default Login;
