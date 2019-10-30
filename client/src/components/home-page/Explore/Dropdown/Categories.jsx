import React, { Fragment } from 'react';
import { categories } from './utils';
import {
  header,
  category,
  categoryListLeft,
  categoryListRight,
  categoriesWrapper,
} from './styles.css';

const Categories = ({ filters, setFilters }) => {
  const renderCategory = categoryName => (
    <li
      id={categoryName}
      key={categoryName}
      className={category}
      onClick={e => {
        const filter = e.target.id;
        filters.includes(e)
          ? setFilters(filters.filter(f => f !== filter))
          : setFilters([...filters, filter]);
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
