import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  rootPath,
  wishlistPath,
  gardenPath,
  searchPath,
  navLinkPaths,
} from 'constants/paths';
import { navLinksContainer, navLink, navLinkSelected } from './styles.css';

export default ({ location, isAuthenticated }) => {
  const navLinkTextByPath = {
    [rootPath]: 'EXPLORE',
    [wishlistPath]: 'WISHLIST',
    [gardenPath]: 'GARDEN',
    [searchPath]: 'SEARCH',
  };
  return (
    <div className={navLinksContainer}>
      {isAuthenticated &&
        navLinkPaths.map(path => (
          <NavLink
            to={path}
            id={path}
            key={path}
            className={navLink}
            isActive={() => location && path === location.pathname}
            activeClassName={navLinkSelected}
          >
            {navLinkTextByPath[path]}
          </NavLink>
        ))}
    </div>
  );
};
