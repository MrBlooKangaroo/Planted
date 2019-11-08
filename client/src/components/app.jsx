import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Layout from './layout';
import Explore from './explore-page/root';
import { rootPath } from '../constants/paths';

const client = new ApolloClient({
  uri: process.env.REACT_APP_BACKEND_URL,
});

export const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route component={Explore} exact path={rootPath} />
        </Layout>
      </Switch>
    </BrowserRouter>
  </ApolloProvider>
);
