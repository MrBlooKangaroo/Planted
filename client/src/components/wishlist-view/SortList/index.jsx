import React from 'react';
import styles from './styles.css';
import {
  singleSunFilled,
  singleSunFilledGreen,
  singleSunUnfilled,
  singleSunUnfilledGreen,
} from 'assets/icons';
import { SortListOption } from '../SortListOption';

const text = {
  alphabetical: 'A to Z',
  alphabeticalIcon: 'A',
  highLight: 'Highest Light',
  highUnselectedLightAlt: 'Shows the filled sun unselected',
  highSelectedLightAlt: 'Shows the filled sun selected',
  lowLight: 'Lowest Light',
  lowUnselectedLightAlt: 'Show the unfilled sun unselected',
  lowSelectedLightAlt: 'Shows the unfilled sun selected',
  newest: 'Newest',
  newestIcon: '<-',
  oldest: 'Oldest',
  oldestIcon: '->',
};

const sortListOptions = {
  alphabetical: {
    icon: text.alphabeticalIcon,
    description: text.alphabetical,
  },
  oldest: {
    icon: text.oldestIcon,
    description: text.oldest,
  },
  newest: {
    icon: text.newestIcon,
    description: text.newest,
  },
  lowLight: {
    icon: singleSunUnfilled,
    iconSelectedSrc: singleSunUnfilledGreen,
    description: text.lowLight,
    selectedAlt: text.lowSelectedLightAlt,
    unselectedAlt: text.lowUnselectedLightAlt,
  },
  highLight: {
    icon: singleSunFilled,
    iconSelectedSrc: singleSunFilledGreen,
    description: text.highLight,
    selectedAlt: text.highSelectedLightAlt,
    unselectedAlt: text.highUnselectedLightAlt,
  },
};

export const SortList = ({ toggleShowList }) => (
  <div className={styles.sortListContainer}>
    {sortListOptions &&
      Object.entries(sortListOptions).map(([key, value]) => (
        <SortListOption
          description={value.description}
          icon={value.icon}
          iconSelectedSrc={value.iconSelectedSrc}
          key={key}
          identifier={key}
          selectedAlt={value.selectedAlt}
          unselectedAlt={value.unselectedAlt}
          toggleShowList={toggleShowList}
        />
      ))}
  </div>
);
