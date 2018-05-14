import React from 'react';
import WindowSizeListener from 'react-window-size-listener';

import './nav.css';

export default function Nav() {
  function toggleBurger() {
    const menuItems = document.querySelector('.navbar');
    if (menuItems.style.display === 'flex') {
      menuItems.style.display = 'none';
    } else {
      menuItems.style.display = 'flex';
    }
  }

  function handleResize(windowSize) {
    const menu = document.querySelector('.navbar');
    if (windowSize.windowWidth >= 480) {
      if (menu.style.display === 'none') {
        menu.style.display = 'flex';
      }
    } else if (windowSize.windowWidth < 480) {
      if (menu.style.display === 'flex') {
        menu.style.display = 'none';
      }
    }
  }

  return (
    <nav>
    <WindowSizeListener onResize={handleResize}></WindowSizeListener>
    <a href="" className="logo">ShellHacks</a>
    <button className='burger-button' onClick={toggleBurger}><i className='fa fa-bars fa-2x'></i></button>
    <ul className="navbar">
      <li className='navbar-item'><a href="#">About</a></li>
      <li className='navbar-item'><a href="#">Schedule</a></li>
      <li className='navbar-item'><a href="#">Sponsors</a></li>
      <button className='menu-close-button' onClick={toggleBurger}>X</button>
    </ul>
    </nav>
  );
}
