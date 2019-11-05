import React from 'react';
import { categorySelected, categoryUnselected } from './dropdown.css';

const CategoryListItem = ({ categoryName, isSelected, onFilterClick }) => (
  <li
    id={categoryName}
    key={categoryName}
    onClick={onFilterClick}
    className={isSelected(categoryName) ? categorySelected : categoryUnselected}
  >
    {categoryName}
  </li>
);

export default CategoryListItem;
