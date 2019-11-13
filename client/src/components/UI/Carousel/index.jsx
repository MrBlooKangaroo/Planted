import React, { useState } from 'react';
import styles from './styles.css';
import { arrowRight, arrowLeft } from 'assets/icons';
import { PlantCard } from '../../UI/plant-card';

const LeftButton = ({ distance, setDistance }) => {
  const clickLeft = () => {
    if (distance < 0) setDistance(distance + 350);
  };

  return distance !== 0 ? (
    <button onClick={clickLeft} className={styles.leftClick}>
      <img src={arrowLeft} alt="left click" />
    </button>
  ) : (
    <div className={styles.leftSideSpace} />
  );
};

const RightButton = ({ distance, setDistance, max }) => {
  const clickRight = () => {
    if (distance > -max) setDistance(distance - 350);
  };

  const farRight = -max;
  const isAtFarRight = max >= 350 && distance !== farRight;

  return (
    isAtFarRight && (
      <button onClick={clickRight} className={styles.rightClick}>
        <img src={arrowRight} alt="right click" />
      </button>
    )
  );
};

export const Carousel = ({ plants }) => {
  const [distance, setDistance] = useState(0);
  const max = (plants.length - 4) * 350;
  const translate = `translatex(${distance}px)`;
  const transform = { transform: translate };

  const states = {
    distance,
    setDistance,
    max,
  };

  return (
    <div className={styles.carousel}>
      <LeftButton {...states} />
      <div className={styles.suggestionsContainer}>
        <div className={styles.carouselContainer}>
          {plants.map(plant => (
            <div style={transform}>
              <PlantCard {...plant} />
            </div>
          ))}
        </div>
      </div>
      <RightButton {...states} />
    </div>
  );
};
