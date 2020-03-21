import React from 'react';
import App from './App';
import ApolloClient, { FetchPolicy, ErrorPolicy } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_ENDPOINT,
});

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network' as FetchPolicy,
    errorPolicy: 'ignore' as ErrorPolicy,
  },
  query: {
    fetchPolicy: 'network-only' as FetchPolicy,
    errorPolicy: 'all' as ErrorPolicy,
  },
};

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions,
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
