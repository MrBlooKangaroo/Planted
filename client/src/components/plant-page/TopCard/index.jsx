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
  name,
  luxLevel,
  luxLevelInfo,
  waterLevel,
  waterCycleInfo,
  photoUrl,
}) => {
  const [showWishlist, toggleShowWishList] = useState(false);
  const heartSrc = showWishlist ? heartSelected : heartUnselected;

  function togglePopUp() {
    toggleShowWishList(!showWishlist);
  }

  return (
    <div className={styles.topCardContainer}>
      <img src={photoUrl} className={styles.plantPicture} alt={text.plantAlt} />
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{name}</h1>
        <div className={styles.buttonPosition}>
          <button className={styles.heartButton} onClick={togglePopUp}>
            <img src={heartSrc} alt={text.heartAlt} />
          </button>
          {showWishlist && (
            <WishlistInPlantType
              togglePopUp={togglePopUp}
              showWishlist={showWishlist}
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
