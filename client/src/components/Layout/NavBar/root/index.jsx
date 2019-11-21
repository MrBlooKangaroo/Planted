import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login';
import NavLinks from '../NavLinks';
import SearchBar from '../SearchBar';
import { rootPath } from 'constants/paths';
import { navBar, logo, navContentRight } from './styles.css';

export const navBarText = {
  logo: 'Planted',
};

const NavBar = props => {
  const [isLogoutVisible, toggleLogoutVisible] = useState(false);
  const [isAuthenticated, toggleIsAuthenticated] = useState(
    localStorage.getItem('user') !== null,
  );

  const onSearchSubmit = e => {
    e.preventDefault();
    localStorage.setItem('searchString', e.target[0].value);
    window.location.href = 'http://localhost:8080/search';
  };

  const baseProps = {
    isLogoutVisible,
    toggleLogoutVisible,
    isAuthenticated,
    toggleIsAuthenticated,
    onSearchSubmit,
    ...props,
  };
  return <BaseNavBar {...baseProps} />;
};

const BaseNavBar = props => (
  <nav className={navBar}>
    <Link to={rootPath} className={logo}>
      {navBarText.logo}
    </Link>
    <NavLinks {...props} />
    <div className={navContentRight}>
      <SearchBar {...props} />
      <Login {...props} />
    </div>
  </nav>
);
export default NavBar;
