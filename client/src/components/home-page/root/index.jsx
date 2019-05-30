import React from 'react';
import styles from './styles.css';

export const text = {
  headline: 'Graphql Starter Kit',
  greeting: 'Make some stuff!',
};

const HomePageRoot = () => (
  <main className={styles.root}>
    <h1 className={styles.headline}>{text.headline}</h1>
    <section>
      <span className={styles.greeting}>{text.greeting}</span>
    </section>
  </main>
);

export { HomePageRoot };
