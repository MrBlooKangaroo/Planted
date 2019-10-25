import React from 'react';
import {
  navBar,
  logo,
  navContentRight,
  searchBar,
  login,
  input,
} from './styles.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { FaSearch } from 'react-icons/fa';

const NavBar = () => (
  <main className={navBar}>
    <div className={logo}>Planted</div>
    <div className={navContentRight}>
      <input
        className={input}
        type="text"
        placeholder=" &#xf002;    Search Plant Names"
      />
      <button className={login}>Log in</button>
    </div>
  </main>
);

export default NavBar;
