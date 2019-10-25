import React from 'react';
import styles from './styles.css';
import { Login } from '../../login/root/index';
// import styles from './styles.css';
import NavBar from '../NavBar';
import Explore from '../Explore';

const HomePageRoot = () => (
  <main className={styles.root}>
    <h1 className={styles.headline}>Planted</h1>
    <NavBar />
  </main>
);

export { HomePageRoot };
