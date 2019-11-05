import React, { useState } from 'react';
import getLuxOrCycleIcon from '../../../utils/getLuxOrCycleIcon';
import { filterUnselected, filterSelected } from './dropdown.css';

const FilterIcon = ({ type, level, isSelected, onFilterClick }) => {
  const [isHovering, toggleHover] = useState(false);
  const id = `${type}:${level}`;
  const selection = isHovering || isSelected(id) ? 'selected' : 'unselected';
  const className = isSelected(id) ? filterSelected : filterUnselected;
  return (
    <li
      id={id}
      key={id}
      onClick={onFilterClick}
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
    >
      {getLuxOrCycleIcon(type, level, selection, className)}
    </li>
  );
};

export default FilterIcon;
