import React from 'react';
import styles from './styles.css';
import { PlantCard } from '../plant-card';

export const WidePlantCard = ({ name, photoUrlVerticalCrop }) => (
  <PlantCard
    styles={styles}
    name={name}
    photoUrlVerticalCrop={photoUrlVerticalCrop}
  />
);
