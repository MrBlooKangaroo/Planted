import React from 'react';
import {
  cycleUnselectedHigh,
  cycleUnselectedMedium,
  cycleUnselectedLow,
} from 'assets/icons';
import { lightLevels } from 'constants/variables';

const altbyWaterLevel = {
  [lightLevels.low]: 'cycleUnselectedLow water level',
  [lightLevels.medium]: 'cycleUnselectedMedium water level',
  [lightLevels.high]: 'cycleUnselectedHigh water level',
};

const srcByLightLevel = {
  [lightLevels.low]: cycleUnselectedLow,
  [lightLevels.medium]: cycleUnselectedMedium,
  [lightLevels.high]: cycleUnselectedHigh,
};

export const WaterLevelPicture = ({ waterLevel = lightLevels.low, styles }) => (
  <img
    src={srcByLightLevel[waterLevel]}
    alt={altbyWaterLevel[waterLevel]}
    className={styles}
  />
);
