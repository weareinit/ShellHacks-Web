import React from 'react';

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
          <div className='dropdown-items'>
          {props.children}
          </div>
          {/* <button className='menu-close-button'>X</button>
          added font awesome close button */}
          <i className="far fa-window-close fa-3x menu-close-button"></i>
        </div>);
      }
      return null;
    })()
  }
  </div>;

export default NavNarrow;
