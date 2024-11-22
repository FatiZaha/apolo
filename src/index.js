import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import App from "./App";

const client = new ApolloClient({
  uri: 'http://localhost:8082/graphql',
  cache: new InMemoryCache(),
});

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    
  </StrictMode>
);
