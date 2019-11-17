import React from 'react';
import { Link } from 'react-router-dom';
import localStyles from './styles.css';

export const PlantCard = ({
  styles = localStyles,
  id,
  name,
  photoUrlVerticalCrop,
}) => (
  <div className={styles.plantBox}>
    <Link to={`/plant-types/${id}`}>
      <img src={photoUrlVerticalCrop} className={styles.plantPic} alt={name} />
    </Link>
    <Link to={`/plant-types/${id}`}>
      <p className={styles.plantName}>{name}</p>{' '}
    </Link>
  </div>
);
