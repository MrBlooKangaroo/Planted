import React from 'react';
import styles from './styles.css';
import { PlantGrid } from 'components/UI/plant-grid';
import { SubHeader } from 'components/UI/SubHeader';

export const NookWishlist = ({ nook: { id, name, wishes } }) => {
  const plantCount = wishes && wishes.length;
  const plantTypes = wishes && wishes.map(wish => wish.plantType);
  return (
    <div>
      <SubHeader id={id} plantCount={plantCount} title={name} />
      <div className={styles.gridContainer}>
        <PlantGrid plants={plantTypes} />
      </div>
    </div>
  );
};
