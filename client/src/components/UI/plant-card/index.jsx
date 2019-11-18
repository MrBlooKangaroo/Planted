import React from 'react';
import localStyles from './styles.css';
import { Link } from 'react-router-dom';

export const PlantCard = ({
  styles = localStyles,
  name,
  id,
  photoUrlVerticalCrop,
}) => {
  const plantPath = `/plant-types/${id}`;

  return (
    <Link to={plantPath} className={styles.linkStyle}>
      <div className={styles.plantBox}>
        <img
          src={photoUrlVerticalCrop}
          className={styles.plantPic}
          alt={name}
        />
        <p className={styles.plantName}>{name}</p>
      </div>
    </Link>
  );
};
