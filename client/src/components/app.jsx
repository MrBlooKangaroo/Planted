import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Layout from 'components/Layout/root';
import Explore from 'components/explore-page/root';
import { rootPath, nookPath } from 'constants/paths';
import { NookDetail } from '../components/nook-view/root';

const client = new ApolloClient({
  uri: process.env.REACT_APP_BACKEND_URL,
  headers: {
    authorization: localStorage.getItem('token'),
  },
});

export const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route component={Explore} exact path={rootPath} />
          <Route component={NookDetail} exact path={nookPath} />
        </Layout>
      </Switch>
    </BrowserRouter>
  </ApolloProvider>
);
