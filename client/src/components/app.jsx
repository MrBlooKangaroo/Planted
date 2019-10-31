import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Layout from './Layout';
import Explore from './Explore';

const client = new ApolloClient({
  uri: 'https://planted-server.herokuapp.com/graphql',
});

export const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route component={Explore} exact path="/" />
        </Layout>
      </Switch>
    </BrowserRouter>
  </ApolloProvider>
);
