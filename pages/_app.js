import { ApolloProvider } from "@apollo/client";
import client from "../GraphQl/config";

import Layout from "@ui/Layout";

import { StateProvider } from "@state/appContext";

import "@styles/globals.css";
import "@styles/linear_icons.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ApolloProvider client={client}>
        <StateProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </StateProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
