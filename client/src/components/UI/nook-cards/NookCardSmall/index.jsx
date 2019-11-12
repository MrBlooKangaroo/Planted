import React, { useState } from 'react';
import getLuxOrCycleIcon from '../../../../utils/getLuxOrCycleIcon';
import { arrowRight, arrowLeft } from '../../../../assets/icons';
import {
  nookCard,
  nookCardName,
  nookCardPhoto,
  carouselContainer,
  arrowRightClass,
  arrowLeftClass,
  userPhoto,
  plantTotal,
  luxLevelIcon,
  nookInfoTop,
  nookInfoBottom,
} from './styles.css';

const NookCardSmall = ({ name, plants }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const currentPlant = plants[carouselIndex];
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const onArrowClick = direction => {
    if (direction === 'left') setCarouselIndex(carouselIndex - 1);
    if (direction === 'right') setCarouselIndex(carouselIndex + 1);
  };
  const plantTotalText =
    plants.length === 1 ? `1 plant` : `${plants.length} plants`;
  return (
    <div className={nookCard}>
      <div className={carouselContainer}>
        {carouselIndex !== 0 && (
          <img
            alt="arrowLeft"
            className={arrowLeftClass}
            src={arrowLeft}
            onClick={() => onArrowClick('left')}
          />
        )}
        <img
          alt={name}
          className={nookCardPhoto}
          src={currentPlant && currentPlant.plantType.photoUrlHorizontalCrop}
        />
        {carouselIndex < plants.length - 1 && (
          <img
            alt="arrowRight"
            className={arrowRightClass}
            src={arrowRight}
            onClick={() => onArrowClick('right')}
          />
        )}
      </div>
      <div className={nookInfoTop}>
        <span className={nookCardName}>{name}</span>
        {getLuxOrCycleIcon(
          'luxLevel',
          currentPlant.nook.luxLevel,
          'unselected',
          luxLevelIcon,
        )}
      </div>
      <div className={nookInfoBottom}>
        <img
          className={userPhoto}
          src={currentUser.photoUrl}
          alt={currentUser.firstName}
        />
        <span className={plantTotal}>{plantTotalText}</span>
      </div>
    </div>
  );
};

export default NookCardSmall;
