import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

import { showToast } from "./utils/toaster";
import mapErrors from "./utils/mapErrors";
import { LOCAL_STORAGE_TOKEN_KEY } from "./constants";

const httpLink = new HttpLink({ uri: "http://localhost:4000/graphql" });

const errorMiddleware = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ extensions, message }) => {
      if (!extensions?.code) return;
      const error =
        mapErrors[extensions.code] || `Sorry, there was a problem [${message}]`;
      showToast(error, "danger");
    });
  }

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);

  if (!token) return forward(operation);

  operation.setContext({
    headers: {
      authorization: localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY),
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorMiddleware, authMiddleware, httpLink]),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
      errorPolicy: "ignore",
    },
    query: {
      fetchPolicy: "network-only",
      errorPolicy: "all",
    },
    mutate: {
      errorPolicy: "all",
    },
  },
});

export default client;
