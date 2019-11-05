import React from 'react';
import {
  navBar,
  logo,
  navContentRight,
  login,
  searchInput,
} from './navbar.css';

export const navBarText = {
  logo: 'Planted',
  login: 'Log in',
};

const NavBar = () => (
  <nav className={navBar}>
    <div className={logo}>{navBarText.logo}</div>
    <div className={navContentRight}>
      <input
        className={searchInput}
        type="text"
        placeholder=" &#xf002;    Search Plant Names"
      />
      <button className={login}>{navBarText.login}</button>
    </div>
  </nav>
);

export default NavBar;
