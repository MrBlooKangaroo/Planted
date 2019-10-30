import React, { useState } from 'react';
import SubFilter from './SubFilter';
import { menuOpen, menuClosed } from './styles.css';
import {
  faSun as sunOn,
  faTint as dropOn,
  faTintSlash as dropOff,
} from '@fortawesome/free-solid-svg-icons';
import { faSun as sunOff } from '@fortawesome/free-regular-svg-icons';

const Dropdown = ({ isOpen }) => {
  const [filters, setFilters] = useState([]);
  const props = {
    filters,
    setFilters,
  };
  return (
    <div className={isOpen ? menuOpen : menuClosed}>
      <SubFilter
        {...props}
        subFilterName="Light Intensity"
        gridIconOn={sunOn}
        gridIconOff={sunOff}
      />
      <SubFilter
        {...props}
        subFilterName="Water Frequency"
        gridIconOn={dropOn}
        gridIconOff={dropOff}
      />
    </div>
  );
};

export default Dropdown;
