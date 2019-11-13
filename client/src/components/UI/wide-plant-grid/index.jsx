import React from 'react';
import styles from './styles.css';
import { PlantGrid } from '../plant-grid';

export const WidePlantGrid = ({ plants }) => (
  <PlantGrid plants={plants} styles={styles} isWide={true} />
);
