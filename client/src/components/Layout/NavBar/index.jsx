import React, { useState } from 'react';
import { Login } from './Login';
import { Link } from 'react-router-dom';
import { rootPath, navLinkPaths } from '../../../constants/paths';
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
};

const renderPath = (path, currentPath) => {
  const navText = path === rootPath ? 'EXPLORE' : path.slice(1).toUpperCase();
  const className = currentPath === path ? navPathSelected : navPath;
  return (
    <Link to={path} key={path} id={path} className={className}>
      {navText}
    </Link>
  );
};

const NavBar = ({ location }) => {
  const [isAuthenticated, toggleIsAuthenticated] = useState(
    localStorage.getItem('user') !== null,
  );
  const currentPath = location ? location.pathname : rootPath;
  return (
    <nav className={navBar}>
      <div className={logo}>{navBarText.logo}</div>
      {isAuthenticated && (
        <div className={navPathsContainer}>
          {navLinkPaths.map(path => renderPath(path, currentPath))}
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
