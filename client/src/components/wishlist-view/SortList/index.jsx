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

const sortListOptions = [
  {
    icon: text.alphabeticalIcon,
    description: text.alphabetical,
  },
  {
    icon: text.oldestIcon,
    description: text.oldest,
  },
  {
    icon: text.newestIcon,
    description: text.newest,
  },
  {
    icon: singleSunUnfilled,
    iconSelectedSrc: singleSunUnfilledGreen,
    description: text.lowLight,
    selectedAlt: text.lowSelectedLightAlt,
    unselectedAlt: text.lowUnselectedLightAlt,
  },
  {
    icon: singleSunFilled,
    iconSelectedSrc: singleSunFilledGreen,
    description: text.highLight,
    selectedAlt: text.highSelectedLightAlt,
    unselectedAlt: text.highUnselectedLightAlt,
  },
];

export const SortList = ({ toggleShowList }) => (
  <div className={styles.sortListContainer}>
    {sortListOptions &&
      sortListOptions.map(listItem => (
        <SortListOption
          description={listItem.description}
          icon={listItem.icon}
          iconSelectedSrc={listItem.iconSelectedSrc}
          key={listItem.description}
          selectedAlt={listItem.selectedAlt}
          unselectedAlt={listItem.unselectedAlt}
          toggleShowList={toggleShowList}
        />
      ))}
  </div>
);
