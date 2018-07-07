import { Link } from 'react-router-dom';
import React from 'react';

import NavItem from '../NavItem/NavItem';
import './navWide.css';
// added images to work with here
const NavWide = props =>
    <div className='navbar-container'>
      <Link to='/' className="logo"></Link>
      <ul className="navbar-items">
        {props.children}
      </ul>
      <a className="mlh" href="https://mlh.io/seasons/na-2019/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2019-season&utm_content=blue">
        <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg" alt="Major League Hacking 2019 Hackathon Season"/>
      </a>
    </div>;

export default NavWide;
