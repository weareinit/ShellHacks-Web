import { Link } from 'react-router-dom';
import React from 'react';

import NavItem from '../NavItem/NavItem';
import './navWide.css';

const NavWide = props =>
    <div className='navbar-container'>
      <Link to='/' className="logo">ShellHacks</Link>
      <ul className="navbar-items">
        {props.children}
      </ul>
    </div>;

export default NavWide;
