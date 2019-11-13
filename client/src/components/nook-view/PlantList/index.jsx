import React, { useState } from 'react';
import styles from './styles.css';
import { arrowRight } from 'assets/icons';
import { WidePlantGrid } from '../../UI/wide-plant-grid';
import { EmptyBanner } from '../EmptyBanner';

const text = {
  altDownArrow: 'Down Arrow',
  altUpArrow: 'Up Arrow',
};

const PaginationButton = ({ showAll, toggleShowAll }) => {
  const style = showAll ? styles.upArrow : styles.downArrow;
  const alt = showAll ? text.altUpArrow : text.altDownArrow;

  return (
    <button className={style} onClick={toggleShowAll}>
      <img src={arrowRight} alt={alt} />
    </button>
  );
};

export const PlantList = ({ plants }) => {
  const [showAll, setShowAll] = useState(false);
  const isPaginated = plants.length > 6;

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return plants.length === 0 ? (
    <EmptyBanner />
  ) : (
    <div>
      <WidePlantGrid
        plants={isPaginated && !showAll ? plants.slice(0, 6) : plants}
      />
      <div className={styles.controlPagination}>
        {isPaginated && (
          <PaginationButton showAll={showAll} toggleShowAll={toggleShowAll} />
        )}
      </div>
    </div>
  );
};
