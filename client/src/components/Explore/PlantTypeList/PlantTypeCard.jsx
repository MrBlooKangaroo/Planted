import React from 'react';
import getLuxOrCycleIcon from '../../../utils/getLuxOrCycleIcon';
import { card, cardPhoto, luxLevelIcon } from './plantTypeList.css';

const PlantTypeCard = ({ plantType: { name, luxLevel, photoUrl } }) => (
  <div className={card}>
    <img alt={name} className={cardPhoto} src={photoUrl} />
    {name}
    {getLuxOrCycleIcon('luxLevel', luxLevel, 'unselected', luxLevelIcon)}
  </div>
);

export default PlantTypeCard;
