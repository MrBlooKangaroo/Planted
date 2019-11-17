import React from 'react';
import { categorySelected, categoryUnselected } from './styles.css';

const CategoryListItem = ({ categoryName, checkIfSelected, onFilterClick }) => (
  <li
    id={`category:${categoryName}`}
    key={categoryName}
    onClick={onFilterClick}
    className={
      checkIfSelected(`category:${categoryName}`)
        ? categorySelected
        : categoryUnselected
    }
  >
    {categoryName}
  </li>
);

export default CategoryListItem;
