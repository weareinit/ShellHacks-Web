import React from 'react';

import './nav.css';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: false,
      isWideScreen: true,
    };
    this.toggleBurger = this.toggleBurger.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  toggleBurger() {
    const menuItems = document.querySelector('.navbar');
    if (this.state.isToggled) {
      menuItems.style.display = 'none';
    } else {
      menuItems.style.display = 'flex';
    }
    this.setState(prevState => ({ isToggled: !prevState.isToggled }));
  }

  handleResize() {
    const menu = document.querySelector('.navbar');
    if (window.innerWidth >= 480) {
      if (!this.state.isWideScreen) {
        menu.style.display = 'flex';
        this.setState(prevState => ({ isWideScreen: !prevState.isWideScreen, isToggled: false }));
      }
    } else if (window.innerWidth < 480) {
      if (this.state.isWideScreen) {
        menu.style.display = 'none';
        this.setState(prevState => ({ isWideScreen: !prevState.isWideScreen, isToggled: false }));
      }
    }
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <nav>
      <a href="" className="logo">ShellHacks</a>
      <button className='burger-button' onClick={this.toggleBurger}><i className='fa fa-bars fa-2x'></i></button>
      <ul className="navbar">
        <li className='navbar-item'><a href="#">About</a></li>
        <li className='navbar-item'><a href="#">Schedule</a></li>
        <li className='navbar-item'><a href="#">Sponsors</a></li>
        <button className='menu-close-button' onClick={this.toggleBurger}>X</button>
      </ul>
      </nav>
    );
  }
}
