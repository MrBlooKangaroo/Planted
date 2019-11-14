import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Layout from './layout/root';
import Explore from './explore-page/root';
import Garden from './garden-view/root';
import { NookDetail } from './nook-view/root';
import { PlantTypePage } from './plant-page/root';
import { WishlistView } from './wishlist-view/root';
import {
  rootPath,
  gardenPath,
  nookPath,
  plantTypePath,
  wishlistPath,
} from '../constants/paths';

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
          <Route component={NookDetail} path={nookPath} />
          <Route component={PlantTypePage} path={plantTypePath} />
          <Route component={WishlistView} exact path={wishlistPath} />
        </Layout>
      </Switch>
    </BrowserRouter>
  </ApolloProvider>
);
