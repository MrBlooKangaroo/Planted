import React, { Fragment } from 'react';
import NavBar from './NavBar';
import './styles.css';

export default props => (
  <Fragment>
    <NavBar />
    {props.children}
  </Fragment>
);
