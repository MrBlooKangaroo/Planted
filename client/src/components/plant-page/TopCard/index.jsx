import React, { useState } from 'react';
import styles from './styles.css';
import { heartUnselected } from 'assets/icons';
import { heartSelected } from 'assets/icons';
import { LightLevelPicture } from 'components/UI/lightLevelPicture';
import { WaterLevelPicture } from 'components/UI/waterLevelPicture';
import { WishlistInPlantType } from '../WishlistPlantType';

export const text = {
  heartAlt: 'Heart Unselected',
  lightHeader: 'Light',
  waterHeader: 'Water',
  plantAlt: 'Plant Type Picture',
};

export const TopCard = ({
  id,
  name,
  luxLevel,
  luxLevelInfo,
  waterLevel,
  waterCycleInfo,
  photoUrl,
  wishes,
}) => {
  const [showWishlist, toggleShowWishList] = useState(false);
  const [showHeartUnselected, toggleShowHeartUnselected] = useState(
    heartUnselected,
  );

  function togglePopUp() {
    if (showWishlist) {
      toggleShowWishList(!showWishlist);
      toggleShowHeartUnselected(heartUnselected);
    } else {
      toggleShowWishList(!showWishlist);
      toggleShowHeartUnselected(heartSelected);
    }
  }

  return (
    <div className={styles.topCardContainer}>
      <div className={styles.plantPictureContainer}>
        <img
          src={photoUrl}
          alt={text.plantAlt}
          className={styles.plantPicture}
        />
      </div>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{name}</h1>
        <div className={styles.buttonPosition}>
          <button className={styles.heartButton} onClick={togglePopUp}>
            <img src={showHeartUnselected} alt={text.heartAlt} />
          </button>
          {showWishlist && (
            <WishlistInPlantType
              plantTypeId={id}
              togglePopUp={togglePopUp}
              showWishlist={showWishlist}
              wishes={wishes}
            />
          )}
        </div>
      </div>
      <section>
        <h2 className={styles.header}>{text.lightHeader}</h2>
        <LightLevelPicture lightLevel={luxLevel} styles={styles.indicator} />
        <p className={styles.description}>{luxLevelInfo}</p>
      </section>
      <section>
        <h3 className={styles.header}>{text.waterHeader}</h3>
        <WaterLevelPicture waterLevel={waterLevel} styles={styles.indicator} />
        <p className={styles.description}>{waterCycleInfo}</p>
      </section>
    </div>
  );
};
