import React from 'react';
import getLuxOrCycleIcon from 'utils/getLuxOrCycleIcon';
import {
  plantCardLarge,
  plantCardLargePhoto,
  plantCardLargeLuxLevel,
  linkStyle,
} from './styles.css';
import { Link } from 'react-router-dom';

const PlantCardLarge = ({ name, luxLevel, photoUrl, id }) => {
  const plantPath = `/plant-types/${id}`;

  return (
    <div className={plantCardLarge}>
      <Link to={plantPath} className={linkStyle}>
        <img alt={name} className={plantCardLargePhoto} src={photoUrl} />
        {name}
        {getLuxOrCycleIcon(
          'luxLevel',
          luxLevel,
          'unselected',
          plantCardLargeLuxLevel,
        )}
      </Link>
    </div>
  );
};

export default PlantCardLarge;
