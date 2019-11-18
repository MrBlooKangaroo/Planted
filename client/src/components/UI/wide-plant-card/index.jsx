import React from 'react';
import styles from './styles.css';
import { PlantCard } from '../plant-card';

export const WidePlantCard = ({ name, photoUrlVerticalCrop, id }) => (
  <PlantCard
    styles={styles}
    name={name}
    id={id}
    photoUrlVerticalCrop={photoUrlVerticalCrop}
  />
);
