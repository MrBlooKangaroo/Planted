import React from 'react';
import * as icons from '../assets/icons';

export default (type, level, selection, className) => {
  level = level.toUpperCase();
  const iconDict = {
    luxLevel: {
      unselected: {
        LOW: icons.luxUnselectedLow,
        MEDIUM: icons.luxUnselectedMedium,
        HIGH: icons.luxUnselectedHigh,
      },
      selected: {
        LOW: icons.luxSelectedLow,
        MEDIUM: icons.luxSelectedMedium,
        HIGH: icons.luxSelectedHigh,
      },
    },
    waterCycle: {
      unselected: {
        LOW: icons.cycleUnselectedLow,
        MEDIUM: icons.cycleUnselectedMedium,
        HIGH: icons.cycleUnselectedHigh,
      },
      selected: {
        LOW: icons.cycleSelectedLow,
        MEDIUM: icons.cycleSelectedMedium,
        HIGH: icons.cycleSelectedHigh,
      },
    },
  };
  const icon = iconDict[type][selection][level];
  return <img src={icon} alt={`${type}:${level}`} className={className} />;
};
