import React from 'react';
import { chooseIcon } from '../utils';
import { card, photo, luxLevelIcon } from './plantList.css';

const Card = ({ plantType: { name, luxLevel } }) => {
  return (
    <main className={card}>
      <img
        alt={name}
        className={photo}
        src="https://www.joann.com/on/demandware.static/-/Sites-joann-product-catalog/default/dw3bc48a19/images/hi-res/78/7856081.jpg"
      />
      {name}
      {chooseIcon('Light Intensity', luxLevel, luxLevelIcon)}
    </main>
  );
};

export default Card;
