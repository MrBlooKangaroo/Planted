import React from 'react';
import styles from './styles.css';
import { CarouselHeader } from '../CarouselHeader';
import { PlantList } from '../PlantList';

export const text = {
  YourPlants: 'Your Plants',
};

export const NookPlants = ({ plants }) => (
  <div className={styles.nookPlants}>
    <CarouselHeader title={text.YourPlants} plantCount={plants.length} />
    <PlantList plants={plants} />
  </div>
);
