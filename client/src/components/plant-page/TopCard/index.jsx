import React, { useState } from 'react';
import styles from './styles.css';
import { heartUnselected } from 'assets/icons';
import { heartSelected } from 'assets/icons';
import { LightLevelPicture } from 'components/UI/lightLevelPicture';
import { WaterLevelPicture } from 'components/UI/waterLevelPicture';
import { WishlistPopup } from '../WishlistPopup';

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
  const [showAddToWishlistOptions, setShowAddToWishlistOptions] = useState(
    false,
  );
  const heartSrc = showAddToWishlistOptions ? heartSelected : heartUnselected;

  const togglePopUp = () => {
    setShowAddToWishlistOptions(!showAddToWishlistOptions);
  };

  return (
    <div className={styles.topCardContainer}>
      <img src={photoUrl} className={styles.plantPicture} alt={text.plantAlt} />
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{name}</h1>
        <div className={styles.buttonPosition}>
          <button className={styles.heartButton} onClick={togglePopUp}>
            <img src={heartSrc} alt={text.heartAlt} />
          </button>
          {showAddToWishlistOptions && (
            <WishlistPopup togglePopUp={togglePopUp} />
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
