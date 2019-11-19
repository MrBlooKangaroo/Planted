import React from 'react';
import { Link } from 'react-router-dom';
import getLuxOrCycleIcon from 'utils/getLuxOrCycleIcon';
import {
  plantCardLarge,
  plantCardLargePhoto,
  plantCardLargeLuxLevel,
} from './styles.css';

const PlantCardLarge = ({ id, name, luxLevel, photoUrl }) => {
  const plantTypeLink = `/plant-types/${id}`;
  const luxIcon = getLuxOrCycleIcon(
    'luxLevel',
    luxLevel,
    'unselected',
    plantCardLargeLuxLevel,
  );
  return (
    <Link to={plantTypeLink} className={plantCardLarge}>
      <img alt={name} className={plantCardLargePhoto} src={photoUrl} />
      {name}
      {luxIcon}
    </Link>
  );
};

export default PlantCardLarge;
