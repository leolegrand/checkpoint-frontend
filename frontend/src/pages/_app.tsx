import "@/styles/globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache({
    addTypename: false
  }),
});

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>)
  ;
}

// Disabling SSR
export default dynamic(() => Promise.resolve(App), { ssr: false });
