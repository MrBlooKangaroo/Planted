import React, { Fragment } from 'react';
// import styles from './styles.css';
import NavBar from '../NavBar';

export const text = {
  headline: 'Graphql Starter Kit',
  greeting: 'Make some stuff!',
};

const HomePageRoot = () => (
  <Fragment>
    <NavBar />
  </Fragment>
);

export { HomePageRoot };
