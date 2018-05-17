import React from 'react';

import NavItem from '../NavItem/NavItem';
import './navWide.css';

const NavWide = props =>
    <div className='navbar-container'>
      <a href="" className="logo">ShellHacks</a>
      <ul className="navbar-items">
        {props.children.map(item => <li key={item.text} className='navbar-item'><NavItem {...item}/></li>)}
      </ul>
    </div>;

export default NavWide;
