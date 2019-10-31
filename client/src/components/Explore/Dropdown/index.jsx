import React from 'react';
import SubFilter from './SubFilter';
import Categories from './Categories';
import { menuOpen, menuClosed } from './dropdown.css';
import {
  faSun as sunOn,
  faTint as dropOn,
  faTintSlash as dropOff,
} from '@fortawesome/free-solid-svg-icons';
import { faSun as sunOff } from '@fortawesome/free-regular-svg-icons';

const Dropdown = props => {
  return (
    <div className={props.isOpen ? menuOpen : menuClosed}>
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
      <Categories {...props} />
    </div>
  );
};

export default Dropdown;
