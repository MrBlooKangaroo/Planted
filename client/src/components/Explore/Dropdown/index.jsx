import React from 'react';
import SubFilter from './SubFilter';
import CategoryList from './CategoryList';
import { dropdownContainer } from '../_styles/dropdown.css';

const Dropdown = props => (
  <div className={dropdownContainer}>
    <SubFilter {...props} type="luxLevel" />
    <SubFilter {...props} type="waterCycle" />
    <CategoryList {...props} />
  </div>
);

export default Dropdown;
