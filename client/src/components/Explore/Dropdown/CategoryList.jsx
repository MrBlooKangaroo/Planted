import React from 'react';
import CategoryListItem from './CategoryListItem';
import categories from '../../../constants/categories';
import {
  header,
  categoryListLeft,
  categoryListRight,
  categoryListContainer,
} from './dropdown.css';

export const text = {
  categories: 'Categories',
};

const CategoryList = props => {
  const leftCategories = categories.slice(0, categories.length / 2);
  const rightCategories = categories.slice(categories.length / 2);
  return (
    <div className={categoryListContainer}>
      <div className={header}>{text.categories}</div>
      <ul className={categoryListLeft}>
        {leftCategories.map(categoryName => (
          <CategoryListItem {...props} categoryName={categoryName} />
        ))}
      </ul>
      <ul className={categoryListRight}>
        {rightCategories.map(categoryName => (
          <CategoryListItem {...props} categoryName={categoryName} />
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
