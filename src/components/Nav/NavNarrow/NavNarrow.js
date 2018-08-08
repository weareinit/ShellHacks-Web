import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import NavItem from '../NavItem/NavItem';

import './navNarrow.css';

const NavNarrow = props =>
  <div className='dropdown-container'>
  <button className='burger-button' onClick={props.toggle}><i className='fa fa-bars fa-2x'></i></button>
  {
    (() => {
      if (props.isOpen) {
        return (
        <div className='dropdown'>
          {(() => {
            if (window.location.pathname === '/') {
              return <HashLink to='/#home' className="logo"></HashLink>;
            }
            return <Link to='/' className="logo"></Link>;
          })()}
          <div className='dropdown-items'>
          {props.children}
          </div>
          <i className="far fa-window-close fa-3x menu-close-button"></i>
        </div>);
      }
      return null;
    })()
  }
  </div>;

export default NavNarrow;
