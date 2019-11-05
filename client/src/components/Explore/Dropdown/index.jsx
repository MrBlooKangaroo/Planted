import React from 'react';
import SubFilter from './SubFilter';
import CategoryList from './CategoryList';
import { menuOpen, menuClosed } from './dropdown.css';

const Dropdown = props => (
  <div className={props.isOpen ? menuOpen : menuClosed}>
    <SubFilter {...props} type="luxLevel" />
    <SubFilter {...props} type="waterCycle" />
    <CategoryList {...props} />
  </div>
);

export default Dropdown;
