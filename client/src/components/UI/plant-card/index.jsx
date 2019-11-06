import React from 'react';
import styles from './styles.css';

export const PlantCard = ({ name, photoUrl }) => (
  <div className={styles.plantBox}>
    <img src={photoUrl} className={styles.plantPic} />
    <p className={styles.plantName}>{name}</p>
  </div>
);
