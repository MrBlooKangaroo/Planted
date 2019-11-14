import React from 'react';
import styles from './styles.css';

export const text = {
  plants: 'plants',
};

export const plantCountText = count => `${count} ${text.plants}`;

export const SubHeader = ({ plantCount, title }) => (
  <div className={styles.leftSideSpace}>
    <span className={styles.categoryNames}>{title}</span>
    {plantCount !== undefined && (
      <span className={styles.count}>{plantCountText(plantCount)}</span>
    )}
  </div>
);
