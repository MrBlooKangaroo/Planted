import React from 'react';
import {
  luxUnselectedHigh,
  luxUnselectedMedium,
  luxUnselectedLow,
} from 'assets/icons';
import { lightLevels } from 'constants/variables';

const altbyLightLevel = {
  [lightLevels.low]: 'luxUnselectedLow sun',
  [lightLevels.medium]: 'luxUnselectedMedium sun',
  [lightLevels.high]: 'luxUnselectedHigh sun',
};

const srcByLightLevel = {
  [lightLevels.low]: luxUnselectedLow,
  [lightLevels.medium]: luxUnselectedMedium,
  [lightLevels.high]: luxUnselectedHigh,
};

export const LightLevelPicture = ({ lightLevel = lightLevels.low, styles }) => (
  <img
    src={srcByLightLevel[lightLevel]}
    alt={altbyLightLevel[lightLevel]}
    className={styles}
  />
);
