import React from 'react';
import CategoryListItem from './CategoryListItem';
import { leftCategories, rightCategories } from 'constants/categories';
import {
  header,
  categoryListLeft,
  categoryListRight,
  categoryListContainer,
} from './styles.css';

export const categoryListText = {
  header: 'Categories',
};

const CategoryList = props => (
  <div className={categoryListContainer}>
    <div className={header}>{categoryListText.header}</div>
    <ul className={categoryListLeft}>
      {leftCategories.map(categoryName => (
        <CategoryListItem
          {...props}
          categoryName={categoryName}
          key={categoryName}
        />
      ))}
    </ul>
    <ul className={categoryListRight}>
      {rightCategories.map(categoryName => (
        <CategoryListItem
          {...props}
          categoryName={categoryName}
          key={categoryName}
        />
      ))}
    </ul>
  </div>
);

export default CategoryList;
