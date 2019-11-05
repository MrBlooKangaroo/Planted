import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Layout from './Layout';
import Explore from './Explore';
import { rootPath } from '../constants/paths';
import { remoteUri } from '../constants/config';

const client = new ApolloClient({
  uri: remoteUri,
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
