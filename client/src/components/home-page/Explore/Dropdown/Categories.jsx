import React, { Fragment } from 'react';
import { categories } from './utils';
import { categoryList, categoryListItem, categoriesHeader } from './styles.css';

const Categories = ({ filters, editFilters }) => {
  return (
    <Fragment>
      <span className={categoriesHeader}>Categories</span>
      <ul className={categoryList}>
        {categories.map(category => (
          <li
            id={category}
            key={category}
            className={categoryListItem}
            onClick={({ target }) => {
              filters.includes(target.id)
                ? editFilters(filters.filter(f => f !== target.id))
                : editFilters(filters.push(target.id));
            }}
          >
            {category}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Categories;
