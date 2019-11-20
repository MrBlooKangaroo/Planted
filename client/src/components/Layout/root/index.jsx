import React from 'react';
import NavBar from '../NavBar/root';
import './styles.css';

export default props => (
  <>
    <NavBar {...props} />
    {props.children}
  </>
);
