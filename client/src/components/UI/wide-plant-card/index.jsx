import React from 'react';
import styles from './styles.css';
import { PlantCard } from '../plant-card';

export const WidePlantCard = ({ plantType }) => (
  <PlantCard styles={styles} {...plantType} />
);
