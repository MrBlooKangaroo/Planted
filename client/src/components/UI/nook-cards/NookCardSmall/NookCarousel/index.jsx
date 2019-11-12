import React from 'react';
import { arrowRight, arrowLeft } from '../../../../../assets/icons';
import {
  nookCardPhoto,
  carouselContainer,
  arrowRightClass,
  arrowLeftClass,
  emptyNook,
} from './styles.css';

export default ({
  nook: { name: nookName },
  currentPlant,
  plants,
  carouselIndex,
  onArrowClick,
}) => (
  <div className={carouselContainer}>
    {carouselIndex !== 0 && (
      <img
        alt="arrowLeft"
        className={arrowLeftClass}
        src={arrowLeft}
        onClick={() => onArrowClick('left')}
      />
    )}
    {currentPlant ? (
      <img
        alt={nookName}
        className={nookCardPhoto}
        src={currentPlant && currentPlant.plantType.photoUrlHorizontalCrop}
      />
    ) : (
      <div className={emptyNook} />
    )}

    {carouselIndex < plants.length - 1 && (
      <img
        alt="arrowRight"
        className={arrowRightClass}
        src={arrowRight}
        onClick={() => onArrowClick('right')}
      />
    )}
  </div>
);
