import React, { useState } from 'react';
import { Login } from './Login';
import { Link, NavLink } from 'react-router-dom';
import { rootPath, navLinkPaths } from 'constants/paths';
import {
  navBar,
  logo,
  navContentRight,
  searchInput,
  navPathsContainer,
  navPath,
  navPathSelected,
} from './styles.css';

export const navBarText = {
  logo: 'Planted',
  explore: 'EXPLORE',
};

export const getNavLinkText = path =>
  path === rootPath ? navBarText.explore : path.slice(1).toUpperCase();

const NavBar = ({ location }) => {
  const [isAuthenticated, toggleIsAuthenticated] = useState(
    localStorage.getItem('user') !== null,
  );
  return (
    <nav className={navBar}>
      <Link to={rootPath} className={logo}>
        {navBarText.logo}
      </Link>
      {isAuthenticated && (
        <div className={navPathsContainer}>
          {navLinkPaths.map(path => (
            <NavLink
              to={path}
              id={path}
              key={path}
              className={navPath}
              activeClassName={navPathSelected}
              isActive={() => location && path === location.pathname}
            >
              {getNavLinkText(path)}
            </NavLink>
          ))}
        </div>
      )}
      <div className={navContentRight}>
        <input
          className={searchInput}
          type="text"
          placeholder=" &#xf002;    Search Plant Names"
        />
        <Login
          isAuthenticated={isAuthenticated}
          toggleIsAuthenticated={toggleIsAuthenticated}
        />
      </div>
    </nav>
  );
};

export default NavBar;
