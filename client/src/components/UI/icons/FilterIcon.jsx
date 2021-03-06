import React, { useState } from 'react';
import getLuxOrCycleIcon from 'utils/getLuxOrCycleIcon';
import { filterUnselected, filterSelected } from './styles.css';

const FilterIcon = ({ type, level, checkIfSelected, onFilterClick }) => {
  const [isHovering, toggleHover] = useState(false);
  const waterCycleDict = {
    HIGH: 'WEEKLY',
    MEDIUM: 'BIWEEKLY',
    LOW: 'MONTHLY',
  };
  const filterId =
    type === 'waterCycle'
      ? `${type}:${waterCycleDict[level]}`
      : `${type}:${level}`;
  const selection =
    isHovering || checkIfSelected(filterId) ? 'selected' : 'unselected';
  const className = checkIfSelected(filterId)
    ? filterSelected
    : filterUnselected;
  return (
    <li
      id={filterId}
      key={filterId}
      onClick={onFilterClick}
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
    >
      {getLuxOrCycleIcon(type, level, selection, className)}
    </li>
  );
};

export default FilterIcon;
