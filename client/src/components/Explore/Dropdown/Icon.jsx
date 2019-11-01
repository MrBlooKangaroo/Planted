import React, { useState } from 'react';
import { chooseIcon } from '../utils';
import { filterUnselected, filterSelected } from './dropdown.css';

const SubFilter = ({ filters, setFilters, type, amount }) => {
  const [isHovering, toggleHover] = useState(false);
  const id = `${type}:${amount}`;
  const selection =
    isHovering || filters.includes(id) ? 'selected' : 'unselected';
  return (
    <li
      id={id}
      key={id}
      onClick={e => {
        const filter =
          e.target.id === '' ? e.target.parentElement.id : e.target.id;
        filters.includes(filter)
          ? setFilters(filters.filter(f => f !== filter))
          : setFilters([...filters, filter]);
      }}
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
    >
      {chooseIcon(
        type,
        amount,
        selection,
        filters.includes(id) ? filterSelected : filterUnselected,
      )}
    </li>
  );
};

export default SubFilter;
