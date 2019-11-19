import React from 'react';
import { Link } from 'react-router-dom';
import localStyles from './styles.css';

export const PlantCard = ({
  styles = localStyles,
  id,
  name,
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
