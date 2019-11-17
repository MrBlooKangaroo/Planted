import { PlantGrid } from '../../UI/plant-grid';
import { SubHeader } from '../../UI/SubHeader';
import React from 'react';
import styles from './styles.css';

export const NookWishlist = ({ id, name, wishes }) => (
  <div>
    <SubHeader id={id} plantCount={wishes.length} title={name} />
    <div className={styles.gridContainer}>
      <PlantGrid plants={wishes.map(wish => wish.plantType)} />
    </div>
  </div>
);
