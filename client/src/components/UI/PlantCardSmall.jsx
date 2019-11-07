import React from 'react';
import { plantBox, plantPic, plantName } from './generic.css';

export default ({ name, photoUrl }) => (
  <div className={plantBox}>
    <img src={photoUrl} className={plantPic} alt={name} />
    <p className={plantName}>{name}</p>
  </div>
);
