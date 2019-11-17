import React from 'react';
import {
  cycleUnselectedHigh,
  cycleUnselectedMedium,
  cycleUnselectedLow,
} from 'assets/icons';
import { waterLevels } from 'constants/variables';

const altbyWaterLevel = {
  [waterLevels.low]: 'Low water level icon',
  [waterLevels.medium]: 'Medium water level icon',
  [waterLevels.high]: 'High water level icon',
};

const srcByWaterLevel = {
  [waterLevels.low]: cycleUnselectedLow,
  [waterLevels.medium]: cycleUnselectedMedium,
  [waterLevels.high]: cycleUnselectedHigh,
};

export const WaterLevelPicture = ({ waterLevel = waterLevels.low, styles }) => (
  <img
    src={srcByWaterLevel[waterLevel]}
    alt={altbyWaterLevel[waterLevel]}
    className={styles}
  />
);
