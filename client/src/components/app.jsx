import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Layout from './layout/root';
import Explore from './explore-page/root';
import Garden from './garden-view';
import { rootPath, gardenPath } from '../constants/paths';

const client = new ApolloClient({
  uri: process.env.REACT_APP_BACKEND_URL,
  headers: { authorization: localStorage.getItem('token') },
});

export const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route component={Explore} exact path={rootPath} />
          <Route component={Garden} path={gardenPath} />
        </Layout>
      </Switch>
    </BrowserRouter>
  </ApolloProvider>
);
