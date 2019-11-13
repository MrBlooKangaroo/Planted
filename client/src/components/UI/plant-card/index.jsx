import React from 'react';
import localStyles from './styles.css';

export const PlantCard = ({ styles = localStyles, name, photoUrl }) => (
  <div className={styles.plantBox}>
    <img src={photoUrl} className={styles.plantPic} />
    <p className={styles.plantName}>{name}</p>
  </div>
);
