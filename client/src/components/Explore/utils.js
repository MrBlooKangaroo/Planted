import React from 'react';
import { gql } from 'apollo-boost';
import * as icons from '../../assets/icons';

export const GET_PLANT_TYPES = gql`
  {
    plantTypes {
      name
      photoUrl
      luxLevel
    }
  }
`;

export const chooseIcon = (type, amount, selection, className) => {
  amount = amount.toUpperCase();
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
  const icon = iconDict[type][selection][amount];
  return <img src={icon} alt={`${type}:${amount}`} className={className} />;
};

export const categories = [
  'Airy and Fresh',
  'Daydream',
  'Dark and Moody',
  'Botanical Garden',
  'Bold Branches',
  'French Bistro',
  'Jungle',
  'Herbs',
  'Urban Jungle',
  'Monsters',
  'Purifies Air',
  'Indie',
  'Quintessential',
  'Sweet',
];

export const amounts = ['LOW', 'MEDIUM', 'HIGH'];
