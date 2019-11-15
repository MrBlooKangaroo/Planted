import React from 'react';
import localStyles from './styles.css';
import { PlantCard } from '../plant-card';
import { WidePlantCard } from '../wide-plant-card';

export const PlantGrid = ({ plants, styles = localStyles, isWide = false }) => {
  const Card = isWide ? WidePlantCard : PlantCard;
  return (
    <div className={styles.plantContainer}>
      {plants && plants.map(plant => <Card key={Math.random()} {...plant} />)}
    </div>
  );
};
