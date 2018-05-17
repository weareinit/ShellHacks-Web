import React from 'react';

import NavItem from '../NavItem/NavItem';

import './navNarrow.css';

const NavNarrow = props =>
  <div className='dropdown-container'>
  <button className='burger-button' onClick={props.toggle}><i className='fa fa-bars fa-2x'></i></button>
  {
    (() => {
      if (props.isToggled) {
        return (
        <div className='dropdown'>
          {props.children.map(item => <NavItem key={item.text} {...item}/>)}
          <button className='menu-close-button' onClick={props.toggle}>X</button>
        </div>);
      }
      return null;
    })()
  }
  </div>;

export default NavNarrow;
