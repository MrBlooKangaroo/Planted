import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login';
import NavLinks from '../NavLinks';
import SearchBar from '../SearchBar';
import { rootPath } from 'constants/paths';
import { logoBlack } from 'assets/icons';
import { navBar, logo, navContentLeft, navContentRight } from './styles.css';

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
    <section className={navContentLeft}>
      <Link to={rootPath}>
        <img src={logoBlack} alt={navBarText.logo} className={logo} />
      </Link>
      <NavLinks {...props} />
    </section>
    <section className={navContentRight}>
      <SearchBar {...props} />
      <Login {...props} />
    </section>
  </nav>
);
export default NavBar;
