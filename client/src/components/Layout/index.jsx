import React, { Fragment } from 'react';
import NavBar from './NavBar';
import './_styles/layout.css';

export default props => (
  <Fragment>
    <NavBar />
    {props.children}
  </Fragment>
);
