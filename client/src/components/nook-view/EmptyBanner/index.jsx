import React from 'react';
import styles from './styles.css';
import { cactus } from 'assets/icons';

const text = {
  noPlants: 'You have no plants in your nook :(',
  cactus: 'cactus',
};

export const EmptyBanner = () => (
  <div className={styles.cactusContainer}>
    <img src={cactus} alt={cactus} className={styles.cactusPicture} />
    <p className={styles.noPlantsText}>{text.noPlants}</p>
  </div>
);
