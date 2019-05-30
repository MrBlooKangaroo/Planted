import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { rootPath } from '../../../constants/paths';
import { HomePageRoot } from '../../home-page/root';

export const AppRoot = () => (
  <BrowserRouter>
    <Switch>
      <Route component={HomePageRoot} exact path={rootPath} />
    </Switch>
  </BrowserRouter>
);
