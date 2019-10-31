import React from 'react';
import sunLow from '../../../assets/sunLow.svg';
import sunMedium from '../../../assets/sunMedium.svg';
import sunHigh from '../../../assets/sunHigh.svg';
import { card, photo, luxLevelIcon } from './plantList.css';

const Card = ({ plantType: { name, luxLevel } }) => {
  let luxIcon;
  switch (luxLevel) {
    case 'LOW':
      luxIcon = sunLow;
      break;
    default:
    case 'MEDIUM':
      luxIcon = sunMedium;
      break;
    case 'HIGH':
      luxIcon = sunHigh;
      break;
  }
  return (
    <main className={card}>
      <img
        alt={name}
        className={photo}
        src="https://www.joann.com/on/demandware.static/-/Sites-joann-product-catalog/default/dw3bc48a19/images/hi-res/78/7856081.jpg"
      />
      {name}
      <img src={luxIcon} alt={luxLevel} className={luxLevelIcon} />
    </main>
  );
};

export default Card;
