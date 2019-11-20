import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import {
  rootPath,
  gardenPath,
  nookPath,
  plantTypePath,
  wishlistPath,
  searchPath,
} from 'constants/paths';
import Layout from 'components/Layout/root';
import Explore from 'components/explore-page/root';
import Garden from './garden-view/root';
import SearchView from 'components/search-view/root';
import { NookDetail } from '../components/nook-view/root';
import { PlantTypePage } from './plant-page/root';
import { WishlistView } from '../components/wishlist-view/root';
import 'components/Layout/root/styles.css';

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
          <Route component={SearchView} path={searchPath} />
        </Layout>
      </Switch>
    </BrowserRouter>
  </ApolloProvider>
);
