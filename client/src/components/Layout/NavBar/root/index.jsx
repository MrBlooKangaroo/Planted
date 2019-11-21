import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Login from '../Login';
import NavLinks from '../NavLinks';
import SearchBar from '../SearchBar';
import { rootPath } from 'constants/paths';
import { navBar, logo, navContentRight } from './styles.css';

export const navBarText = {
  logo: 'Planted',
};

const NavBar = props => {
  const [isAuthenticated, toggleIsAuthenticated] = useState(
    localStorage.getItem('user') !== null,
  );

  const onSearchSubmit = e => {
    e.preventDefault();
    localStorage.setItem('searchString', e.target[0].value);
    props.history.push('/search');
  };
  const baseProps = {
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

export default withRouter(NavBar);
