import React from 'react';
import getLuxOrCycleIcon from '../../../utils/getLuxOrCycleIcon';
import {
  plantCardLarge,
  plantCardLargePhoto,
  plantCardLargeLuxLevel,
} from '../_styles/plant-cards.css';

const PlantCardLarge = ({ name, luxLevel, photoUrl }) => (
  <div className={plantCardLarge}>
    <img alt={name} className={plantCardLargePhoto} src={photoUrl} />
    {name}
    {getLuxOrCycleIcon(
      'luxLevel',
      luxLevel,
      'unselected',
      plantCardLargeLuxLevel,
    )}
  </div>
);

export default PlantCardLarge;
