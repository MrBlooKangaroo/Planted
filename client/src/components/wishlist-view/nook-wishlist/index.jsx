import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';
import { PlantGrid } from 'components/UI/plant-grid';
import { SubHeader } from 'components/UI/SubHeader';

export const NookWishlist = ({ nook }) => {
  const { id, name, wishes } = nook;
  const plantCount = wishes && wishes.length;
  const plantTypes = wishes && wishes.map(wish => wish.plantType);
  const nookViewLink = `/nooks/${id}`;
  return (
    <div>
      <Link to={nookViewLink}>
        <SubHeader id={id} plantCount={plantCount} title={name} />
      </Link>
      <div className={styles.gridContainer}>
        <PlantGrid plants={plantTypes} />
      </div>
    </div>
  );
};
