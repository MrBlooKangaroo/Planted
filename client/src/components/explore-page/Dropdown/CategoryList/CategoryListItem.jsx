import React from 'react';
import { categorySelected, categoryUnselected } from './styles.css';

const CategoryListItem = ({ categoryName, checkIfSelected, onFilterClick }) => (
  <li
    id={categoryName}
    key={categoryName}
    onClick={onFilterClick}
    className={
      checkIfSelected(categoryName) ? categorySelected : categoryUnselected
    }
  >
    {categoryName}
  </li>
);

export default CategoryListItem;
