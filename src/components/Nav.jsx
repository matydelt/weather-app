import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';
import './Nav.css';



function Nav({ onSearch, error }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to='/'>
        <span className="navbar-brand">
          <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Henry - Weather App
        </span>
      </Link>
        <SearchBar
          onSearch={onSearch}/>
      <Link to='/about'>
        <span>About Me</span>
        </Link>

    </nav>
  );
};
export const validate = function (input) {
  let errors = { };
  if (!input.username) {
      errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
      errors.username = 'Username is invalid';
  }  
  return errors;
};

export default Nav;
