import { createHttpLink, ApolloClient, InMemoryCache } from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

const backendEndpoint = "http://localhost:4000/";

const httpLink = createHttpLink({
  uri: backendEndpoint,
});

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = await localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
