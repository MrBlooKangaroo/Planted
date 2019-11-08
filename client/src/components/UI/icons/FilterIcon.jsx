import React, { useState } from 'react';
import getLuxOrCycleIcon from '../../../utils/getLuxOrCycleIcon';
import { filterUnselected, filterSelected } from './styles.css';

const FilterIcon = ({ type, level, isSelected, onFilterClick }) => {
  const [isHovering, toggleHover] = useState(false);
  const filterId = `${type}:${level}`;
  const selection =
    isHovering || isSelected(filterId) ? 'selected' : 'unselected';
  const className = isSelected(filterId) ? filterSelected : filterUnselected;
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
