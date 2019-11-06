import React from 'react';
import getLuxOrCycleIcon from '../../../utils/getLuxOrCycleIcon';
import {
  plantTypeCard,
  plantTypeCardPhoto,
  luxLevelIcon,
} from './plantTypeList.css';

const PlantTypeCard = ({ plantType: { name, luxLevel, photoUrl } }) => (
  <div className={plantTypeCard}>
    <img alt={name} className={plantTypeCardPhoto} src={photoUrl} />
    {name}
    {getLuxOrCycleIcon('luxLevel', luxLevel, 'unselected', luxLevelIcon)}
  </div>
);

export default PlantTypeCard;
