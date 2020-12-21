import { createContext, useContext } from "react";
import { useQuery } from "@apollo/client";

import { GET_CURRENT_USER } from "./UserContext.gql";
import {
  GetCurrentUser,
  GetCurrentUser_me,
} from "./__generated__/GetCurrentUser";

const CurrentUserContext = createContext<{
  me: GetCurrentUser_me | undefined;
}>({
  me: undefined,
});

export const CurrentUserProvider = ({ children }: any) => {
  const { data } = useQuery<GetCurrentUser>(GET_CURRENT_USER, {
    fetchPolicy: "cache-first",
  });

  return (
    <CurrentUserContext.Provider value={{ me: data?.me }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export const useCurrentUser = () => useContext(CurrentUserContext);
