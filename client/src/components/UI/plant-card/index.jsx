import React from 'react';
import localStyles from './styles.css';

export const PlantCard = ({
  styles = localStyles,
  name,
  photoUrlVerticalCrop,
}) => (
  <div className={styles.plantBox}>
    <img src={photoUrlVerticalCrop} className={styles.plantPic} />
    <p className={styles.plantName}>{name}</p>
  </div>
);
