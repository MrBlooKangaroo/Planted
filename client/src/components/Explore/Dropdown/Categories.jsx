import React from 'react';
import { categories } from '../utils';
import {
  header,
  categoryUnselected,
  categorySelected,
  categoryListLeft,
  categoryListRight,
  categoriesContainer,
} from './dropdown.css';

const Categories = ({ filters, setFilters }) => {
  const renderCategory = categoryName => (
    <li
      id={categoryName}
      key={categoryName}
      className={
        filters.includes(categoryName) ? categorySelected : categoryUnselected
      }
      onClick={e => {
        filters.includes(e.target.id)
          ? setFilters(filters.filter(f => f !== e.target.id))
          : setFilters([...filters, e.target.id]);
      }}
    >
      {categoryName}
    </li>
  );
  return (
    <div className={categoriesContainer}>
      <div className={header}>Categories</div>
      <ul className={categoryListLeft}>
        {categories
          .slice(0, categories.length / 2)
          .map(categoryName => renderCategory(categoryName))}
      </ul>
      <ul className={categoryListRight}>
        {categories
          .slice(categories.length / 2)
          .map(categoryName => renderCategory(categoryName))}
      </ul>
    </div>
  );
};

export default Categories;
