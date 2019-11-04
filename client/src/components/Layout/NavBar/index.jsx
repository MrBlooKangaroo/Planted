import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../constants/routes';
import {
  navBar,
  logo,
  navContentRight,
  login,
  searchInput,
  navContentLeft,
  routesContainer,
  navBarRoute,
} from './navbar.css';

const renderRoute = route => {
  const navText = route === '/' ? 'EXPLORE' : route.toUpperCase();
  return (
    <Link to={route} key={route} id={route} className={navBarRoute}>
      {navText}
    </Link>
  );
};

const NavBar = () => {
  return (
    <nav className={navBar}>
      <div className={logo}>Planted</div>
      <div className={navContentLeft}>
        <div className={routesContainer}>
          {routes.map(route => renderRoute(route))}
        </div>
      </div>
      <div className={navContentRight}>
        <input
          className={searchInput}
          type="text"
          placeholder=" &#xf002;    Search Plant Names"
        />
        <button className={login}>Log in</button>
      </div>
    </nav>
  );
};

export default NavBar;
