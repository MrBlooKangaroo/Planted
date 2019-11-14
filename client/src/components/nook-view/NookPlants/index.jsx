import React from 'react';
import styles from './styles.css';
import { SubHeader } from 'components/UI/SubHeader';
import { PlantList } from '../PlantList';

export const text = {
  YourPlants: 'Your Plants',
};

export const NookPlants = ({ plants }) => (
  <div className={styles.nookPlants}>
    <SubHeader title={text.YourPlants} plantCount={plants.length} />
    <PlantList plants={plants} />
  </div>
);
