import React from 'react';
import { Link } from 'react-router-dom';
import { arrowRight, arrowLeft, emptyNook } from 'assets/icons';

import {
  nookCardPhoto,
  carouselContainer,
  arrowRightClass,
  arrowLeftClass,
  emptyNookClass,
} from './styles.css';

export default ({
  nook: { name },
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
      <Link to={`/plant-types/${currentPlant.plantType.id}`}>
        <img
          alt={name}
          className={nookCardPhoto}
          src={
            currentPlant.photoUrl ||
            currentPlant.plantType.photoUrlHorizontalCrop
          }
        />
      </Link>
    ) : (
      <img alt="emptyNook" src={emptyNook} className={emptyNookClass} />
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
