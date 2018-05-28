import { Link } from 'react-router-dom';
import React from 'react';

import NavItem from '../NavItem/NavItem';
import RegisterLink from '../../Auth/Register/RegisterLink';
import './navWide.css';

const NavWide = props =>
    <div className='navbar-container'>
      <Link to='/' className="logo">ShellHacks</Link>
      <ul className="navbar-items">
        {props.children}
        <li className='navbar-item'><RegisterLink /></li>
      </ul>
    </div>;

export default NavWide;
