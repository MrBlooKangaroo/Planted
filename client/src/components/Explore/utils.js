import React from 'react';
import sunLow from '../../assets/sunLow.svg';
import sunMedium from '../../assets/sunMedium.svg';
import sunHigh from '../../assets/sunHigh.svg';
import waterLow from '../../assets/waterLow.svg';
import waterMedium from '../../assets/waterMedium.svg';
import waterHigh from '../../assets/waterHigh.svg';
import { iconClass } from './explore.css';

export const chooseIcon = (name, amount, className = iconClass) => {
  let icon;
  debugger;
  if (name === 'Light Intensity') {
    switch (amount) {
      case 'LOW':
        icon = sunLow;
        break;
      default:
      case 'MEDIUM':
        icon = sunMedium;
        break;
      case 'HIGH':
        icon = sunHigh;
        break;
    }
  } else {
    switch (amount) {
      case 'LOW':
        icon = waterLow;
        break;
      default:
      case 'MEDIUM':
        icon = waterMedium;
        break;
      case 'HIGH':
        icon = waterHigh;
        break;
    }
  }
  return <img src={icon} alt={`${name}:${amount}`} className={className} />;
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

export const amounts = ['low', 'medium', 'high'];
