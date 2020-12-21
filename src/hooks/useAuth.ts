import { useHistory } from "react-router-dom";
import { useApolloClient } from "@apollo/react-hooks";

import { LOCAL_STORAGE_TOKEN_KEY } from "../constants";

const useAuth = () => {
  const client = useApolloClient();
  const history = useHistory();

  const setToken = (token: string) => {
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
    history.push("/feed");
  };

  const logout = () => {
    client.resetStore();
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
    history.push("/");
  };

  const logged = !!localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);

  return { setToken, logout, logged };
};

export default useAuth;
