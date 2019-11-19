import React from 'react';
import { NavLink } from 'react-router-dom';
import { rootPath, navLinkPaths } from 'constants/paths';
import { navLinksContainer, navLink, navLinkSelected } from './styles.css';

export const navLinksText = {
  explore: 'EXPLORE',
};

export default ({ location, isAuthenticated }) => (
  <div className={navLinksContainer}>
    {isAuthenticated &&
      navLinkPaths.map(path => (
        <NavLink
          to={path}
          id={path}
          key={path}
          className={navLink}
          activeClassName={navLinkSelected}
          isActive={() => location && path === location.pathname}
        >
          {path === rootPath
            ? navLinksText.explore
            : path.slice(1).toUpperCase()}
        </NavLink>
      ))}
  </div>
);
