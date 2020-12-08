import React, { ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { FormGroup, InputGroup, Button } from "@blueprintjs/core";
import { Link } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import { LoginContainer } from "./Login.styles";
import {
  AuthMutation,
  AuthMutationVariables,
} from "./__generated__/AuthMutation";
import { AUTH } from "./gql";

const Login: React.FC = () => {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });
  const [login, { data, loading }] = useMutation<
    AuthMutation,
    AuthMutationVariables
  >(AUTH);
  const { setToken } = useAuth();

  React.useEffect(() => {
    if (data?.Auth?.token) setToken(data.Auth.token);
  }, [data, setToken]);

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
