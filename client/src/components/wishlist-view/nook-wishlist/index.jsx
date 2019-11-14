import { PlantGrid } from '../../UI/plant-grid';
import { SubHeader } from 'components/UI/SubHeader';
import React from 'react';
import styles from './styles.css';

export const NookWishlist = ({ nook }) => (
  <div>
    <SubHeader plantCount={nook.wishes.length} title={nook.name} />
    <div className={styles.gridContainer}>
      <PlantGrid plants={nook.wishes} />
    </div>
  </div>
);
