import React from 'react';
import NavBar from '../NavBar';

export default props => (
  <>
    <NavBar {...props} />
    {props.children}
  </>
);
