import React, { useState } from 'react';
import { Login } from './Login';
import { Link } from 'react-router-dom';
import paths from '../../../constants/paths';
import {
  navBar,
  logo,
  navContentRight,
  searchInput,
  navPathsContainer,
  navPath,
  navPathSelected,
} from './styles.css';

const renderPath = (path, pathname) => {
  const navText = path === '/' ? 'EXPLORE' : path.slice(1).toUpperCase();
  const className = pathname === path ? navPathSelected : navPath;
  return (
    <Link to={path} key={path} id={path} className={className}>
      {navText}
    </Link>
  );
};

const NavBar = ({ location: { pathname } }) => {
  const [isAuthenticated, toggleIsAuthenticated] = useState(
    localStorage.getItem('user') !== null,
  );
  const loginProps = { isAuthenticated, toggleIsAuthenticated };
  return (
    <nav className={navBar}>
      <div className={logo}>Planted</div>
      {isAuthenticated && (
        <div className={navPathsContainer}>
          {paths.map(path => renderPath(path, pathname))}
        </div>
      )}
      <div className={navContentRight}>
        <input
          className={searchInput}
          type="text"
          placeholder=" &#xf002;    Search Plant Names"
        />
        <Login {...loginProps} />
      </div>
    </nav>
  );
};

export default NavBar;
