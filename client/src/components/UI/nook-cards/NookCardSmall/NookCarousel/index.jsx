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

const NookCarousel = ({
  nook: { name },
  currentPlant,
  plants,
  carouselIndex,
  onArrowClickLeft,
  onArrowClickRight,
}) => {
  const isAtLeftLimit = carouselIndex === 0;
  const isAtRightLimit = carouselIndex === plants.length - 1;
  const plantTypeLink =
    currentPlant && `/plant-types/${currentPlant.plantType.id}`;
  const currentPlantImgSrc =
    currentPlant &&
    (currentPlant.photoUrl || currentPlant.plantType.photoUrlHorizontalCrop);
  return (
    <div className={carouselContainer}>
      {currentPlant ? (
        <div>
          {!isAtLeftLimit && (
            <img
              alt="arrowLeft"
              className={arrowLeftClass}
              src={arrowLeft}
              onClick={onArrowClickLeft}
            />
          )}
          <Link to={plantTypeLink}>
            <img
              alt={name}
              className={nookCardPhoto}
              src={currentPlantImgSrc}
            />
          </Link>
          {!isAtRightLimit && (
            <img
              alt="arrowRight"
              className={arrowRightClass}
              src={arrowRight}
              onClick={onArrowClickRight}
            />
          )}
        </div>
      ) : (
        <img alt="emptyNook" src={emptyNook} className={emptyNookClass} />
      )}
    </div>
  );
};

export default NookCarousel;
