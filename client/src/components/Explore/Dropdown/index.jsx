import React from 'react';
import SubFilter from './SubFilter';
import Categories from './Categories';
import { menuOpen, menuClosed } from './dropdown.css';

const Dropdown = props => (
  <div className={props.isOpen ? menuOpen : menuClosed}>
    <SubFilter {...props} type="luxLevel" />
    <SubFilter {...props} type="waterCycle" />
    <Categories {...props} />
  </div>
);

export default Dropdown;
