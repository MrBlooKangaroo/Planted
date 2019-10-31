import React from 'react';
import { categories } from './utils';
import {
  header,
  categoryUnselected,
  categorySelected,
  categoryListLeft,
  categoryListRight,
  categoriesWrapper,
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
        const category = e.target.id;
        filters.includes(category)
          ? setFilters(filters.filter(f => f !== category))
          : setFilters([...filters, category]);
      }}
    >
      {categoryName}
    </li>
  );
  return (
    <div className={categoriesWrapper}>
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
