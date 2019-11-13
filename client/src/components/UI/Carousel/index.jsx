import React, { useState } from 'react';
import styles from './styles.css';
import { arrowRight, arrowLeft } from 'assets/icons';
import { PlantCard } from '../../UI/plant-card';

const LeftButton = ({ distance, setDistance }) => {
  const clickLeft = () => {
    if (distance < 0) {
      setDistance(distance + 350);
    }
  };
  if (distance !== 0) {
    return (
      <button onClick={clickLeft} className={styles.leftClick}>
        <img src={arrowRight} alt="left click" />
      </button>
    );
  } else {
    return <div className={styles.leftSideSpace} />;
  }
};

const RightButton = ({ distance, setDistance, max }) => {
  const clickRight = () => {
    if (distance > -max) {
      setDistance(distance - 350);
    }
  };

  const farRight = -max;

  return (
    max >= 350 &&
    distance !== farRight && (
      <button onClick={clickRight} className={styles.rightClick}>
        <img src={arrowLeft} alt="left click" />
      </button>
    )
  );
};

export const Carousel = ({ plants }) => {
  const [distance, setDistance] = useState(0);
  const max = (plants.length - 4) * 350;

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
            <div style={{ transform: `translatex(${distance}px)` }}>
              <PlantCard {...plant} />
            </div>
          ))}
        </div>
      </div>
      <RightButton {...states} />
    </div>
  );
};
