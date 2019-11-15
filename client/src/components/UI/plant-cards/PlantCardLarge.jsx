import React from 'react';
import { Link } from 'react-router-dom';
import getLuxOrCycleIcon from 'utils/getLuxOrCycleIcon';
import {
  plantCardLarge,
  plantCardLargePhoto,
  plantCardLargeLuxLevel,
} from './styles.css';

const PlantCardLarge = ({ id, name, luxLevel, photoUrl }) => (
  <Link to={`/plant-types/${id}`} className={plantCardLarge}>
    <img alt={name} className={plantCardLargePhoto} src={photoUrl} />
    {name}
    {getLuxOrCycleIcon(
      'luxLevel',
      luxLevel,
      'unselected',
      plantCardLargeLuxLevel,
    )}
  </Link>
);

export default PlantCardLarge;
