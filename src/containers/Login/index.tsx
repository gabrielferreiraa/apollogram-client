import React, { useState, ChangeEvent } from "react";
import { useMutation, useLazyQuery } from "@apollo/client";
import { FormGroup, InputGroup, Button } from "@blueprintjs/core";
import { Link } from "react-router-dom";

import useAuth from "hooks/useAuth";
import {
  AuthMutation,
  AuthMutationVariables,
} from "./__generated__/AuthMutation";
import { GET_CURRENT_USER } from "contexts/UserContext.gql";
import { AUTH } from "./gql";
import { LoginContainer } from "./Login.styles";

const Login: React.FC = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { setToken } = useAuth();
  const [getCurrentUser] = useLazyQuery(GET_CURRENT_USER);

  const [login, { loading }] = useMutation<AuthMutation, AuthMutationVariables>(
    AUTH,
    {
      onCompleted: ({ auth }) => {
        if (!auth) return;
        setToken(auth.token);
        getCurrentUser();
      },
    }
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();

    login({
      variables: {
        email: values.email,
        password: values.password,
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
    <LoginContainer>
      <form onSubmit={handleSubmit}>
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
        <Button
          type="submit"
          intent="primary"
          rightIcon="arrow-right"
          loading={loading}
          fill
        >
          Login
        </Button>
        <Link to="/create-user">Create User</Link>
      </form>
    </LoginContainer>
  );
};

export default Login;
