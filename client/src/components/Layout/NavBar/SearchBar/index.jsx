import React from 'react';
import { searchInput } from './styles.css';

export default ({ onSearchSubmit }) => (
  <form onSubmit={onSearchSubmit}>
    <input
      type="text"
      className={searchInput}
      onSubmit={onSearchSubmit}
      placeholder=" &#xf002;    Search Plant Names"
    />
  </form>
);
