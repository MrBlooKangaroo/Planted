import React from 'react';
import { categorySelected, categoryUnselected } from './styles.css';

const CategoryListItem = ({ categoryName, checkIfSelected, onFilterClick }) => {
  const id = `category:${categoryName}`;
  const className = checkIfSelected(id) ? categorySelected : categoryUnselected;
  return (
    <li
      id={id}
      key={categoryName}
      onClick={onFilterClick}
      className={className}
    >
      {categoryName}
    </li>
  );
};

export default CategoryListItem;
