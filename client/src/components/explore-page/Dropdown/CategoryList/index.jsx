import React from 'react';
import CategoryListItem from './CategoryListItem';
import categories from 'constants/categories';
import { header, categoryList, categoryListContainer } from './styles.css';

export const categoryListText = {
  header: 'Categories',
};

const CategoryList = props => (
  <div className={categoryListContainer}>
    <div className={header}>{categoryListText.header}</div>
    <ul className={categoryList}>
      {categories.map(categoryName => (
        <CategoryListItem
          key={categoryName}
          categoryName={categoryName}
          {...props}
        />
      ))}
    </ul>
  </div>
);

export default CategoryList;
