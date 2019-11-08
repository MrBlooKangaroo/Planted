import React from 'react';
import {
  plantCardSmall,
  plantCardSmallPhoto,
  plantCardSmallName,
} from './styles.css';

export default ({ name, photoUrl }) => (
  <div className={plantCardSmall}>
    <img src={photoUrl} className={plantCardSmallPhoto} alt={name} />
    <p className={plantCardSmallName}>{name}</p>
  </div>
);
