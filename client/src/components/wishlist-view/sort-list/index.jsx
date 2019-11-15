import React, { useState } from 'react';
import styles from './styles.css';
import {
  singleSunUnfilled,
  singleSunFilled,
  singleSunUnfilledGreen,
  singleSunFilledGreen,
} from 'assets/icons';

const text = {
  alphabetical: 'A to Z',
  oldest: 'Oldest',
  newest: 'Newest',
  lowLight: 'Lowest Light',
  highLight: 'Highest Light',
  alphabeticalIcon: 'A',
  oldestIcon: '->',
  newestIcon: '<-',
};

const list = [
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
    iconGreen: singleSunUnfilledGreen,
    description: text.lowLight,
  },
  {
    icon: singleSunFilled,
    iconGreen: singleSunFilledGreen,
    description: text.highLight,
  },
];

const IconAndDescription = ({ icon, description }) => (
  <div className={styles.itemContainer}>
    <div className={styles.iconContainer}>
      {icon.length < 10 ? <p>{icon}</p> : <img src={icon} alt="icon" />}
    </div>
    <p>{description}</p>
  </div>
);

const SortListItem = ({
  icon,
  description,
  iconGreen,
  setHeader,
  toggleShowList,
}) => {
  const [selected, toggleSelected] = useState(false);
  const [iconPic, changeIconPic] = useState(icon);

  function toggleHover() {
    if (iconPic.length > 10) {
      if (selected) {
        toggleSelected(!selected);
        changeIconPic(icon);
      } else {
        toggleSelected(!selected);
        changeIconPic(iconGreen);
      }
    }
  }

  return (
    <button
      className={styles.sortListButton}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      onClick={() => {
        setHeader(<IconAndDescription icon={icon} description={description} />);
        toggleShowList();
      }}
    >
      <IconAndDescription icon={iconPic} description={description} />
    </button>
  );
};

export const SortList = ({ setHeader, toggleShowList }) => {
  return (
    <div className={styles.sortListContainer}>
      {list &&
        list.map(listItem => (
          <SortListItem
            icon={listItem.icon}
            iconGreen={listItem.iconGreen}
            description={listItem.description}
            setHeader={setHeader}
            toggleShowList={toggleShowList}
          />
        ))}
    </div>
  );
};
