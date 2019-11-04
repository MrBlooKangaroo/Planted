import React from 'react';
import {
  BrowserRouter,
  IndexRoute,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Layout from './Layout';
import Explore from './Explore';
import Garden from './Garden';
import Page404 from './Page404';

const client = new ApolloClient({
  uri: 'https://planted-server.herokuapp.com/graphql',
});

export const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route component={Explore} exact path="/" />
          <Route component={Garden} path="/garden" />
        </Layout>
      </Switch>
    </BrowserRouter>
  </ApolloProvider>
);
