import React from 'react';
import { Login } from './Login';
import {
  navBar,
  logo,
  navContentRight,
  searchInput,
} from '../_styles/navbar.css';

export const navBarText = {
  logo: 'Planted',
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
      <Login />
    </div>
  </nav>
);

export default NavBar;
