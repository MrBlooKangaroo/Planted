import React from 'react';
import styles from './styles.css';

export const PlantCard = ({ plant }) => {
  return (
    <div className={styles.plantBox}>
      <img src={plant.photoUrl} className={styles.plantPic} />
      <p className={styles.plantName}>{plant.name}</p>
    </div>
  );
};
