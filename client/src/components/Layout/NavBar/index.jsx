import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../constants/routes';
import {
  navBar,
  logo,
  navContentRight,
  login,
  searchInput,
  // navContentLeft,
  navRoutesContainer,
  navRoute,
  navRouteSelected,
} from './navbar.css';

const renderRoute = (route, pathname) => {
  const navText = route === '/' ? 'EXPLORE' : route.slice(1).toUpperCase();
  const className = pathname === route ? navRouteSelected : navRoute;
  return (
    <Link to={route} key={route} id={route} className={className}>
      {navText}
    </Link>
  );
};

const NavBar = ({ location: { pathname } }) => {
  return (
    <nav className={navBar}>
      <div className={logo}>Planted</div>
      <div className={navRoutesContainer}>
        {routes.map(route => renderRoute(route, pathname))}
      </div>
      <div className={navContentRight}>
        <input
          className={searchInput}
          type="text"
          placeholder=" &#xf002;    Search Plant Names"
        />
        <button className={login}>Log out</button>
      </div>
    </nav>
  );
};

export default NavBar;
