import React from 'react';
import { nookCard, nookCardName } from './styles.css';

const NookCardSmall = ({ name }) => (
  <div className={nookCard}>
    <span className={nookCardName}>{name}</span>
  </div>
);

export default NookCardSmall;
