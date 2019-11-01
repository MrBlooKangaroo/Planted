import React from 'react';
import { chooseIcon } from '../utils';
import { card, cardPhoto, luxLevelIcon } from './plantList.css';

const Card = ({ plantType: { name, luxLevel, photoUrl } }) => (
  <div className={card}>
    <img alt={name} className={cardPhoto} src={photoUrl} />
    {name}
    {chooseIcon('luxLevel', luxLevel, 'unselected', luxLevelIcon)}
  </div>
);

export default Card;
