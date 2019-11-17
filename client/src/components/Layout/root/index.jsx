import React, { Fragment } from 'react';
import NavBar from '../NavBar';

export default props => (
  <Fragment>
    <NavBar {...props} />
    {props.children}
  </Fragment>
);
