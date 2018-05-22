import React from 'react';

import NavWide from './NavWide/NavWide';
import NavNarrow from './NavNarrow/NavNarrow';
import NavItem from './NavItem/NavItem';
import './nav.css';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isWideScreen: true, // if is widescreen, show widenav else show narrownav
      isDropdownOpen: false,
      windowLocation: '',
      menuItems: [
        {
          text: 'About',
          link: 'about-section',
        },
        {
          text: 'Schedule',
          link: '#',
        },
        {
          text: 'FAQ',
          link: '#',
        },
        {
          text: 'Sponsors',
          link: '#',
        },
      ],
    };
    this.handleResize = this.handleResize.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.scrollToWindowPosition = this.scrollToWindowPosition.bind(this);
  }

  toggleDropdown() {
    this.setState(prevState => ({ isDropdownOpen: !prevState.isDropdownOpen }));
  }

  closeDropdown() {
    this.setState({ isDropdownOpen: false });
  }

  handleResize() {
    if (window.innerWidth >= 480) {
      if (!this.state.isWideScreen) {
        this.setState(prevState => ({
          isWideScreen: !prevState.isWideScreen,
          isDropdownOpen: false,
        }));
      }
    } else if (window.innerWidth < 480) {
      if (this.state.isWideScreen) {
        this.setState(prevState => ({
          isWideScreen: !prevState.isWideScreen,
          isDropdownOpen: false,
        }));
      }
    }
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate(prevState) {
    if (this.state.isDropdownOpen && prevState.isDropdownOpen) {
      return;
    }

    const dropDown = document.querySelector('.dropdown');
    let dropDownItems = document.querySelector('.navbar-items');
    if (!this.state.isWideScreen) {
      dropDownItems = document.querySelector('.dropdown-items');
    }
    if (this.state.isDropdownOpen && !prevState.isDropdownOpen) {
      dropDown.addEventListener('click', this.closeDropdown, false);
      dropDownItems.addEventListener('click', this.scrollToWindowPosition, true);
    } else if (!this.state.isDropdownOpen && prevState.isDropdownOpen) {
      dropDown.removeEventListener('click', this.closeDropdown);
      dropDownItems.removeEventListener('click', this.scrollToWindowPosition);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  scrollToWindowPosition(e) {
    e.preventDefault();
    const jumpLocation = e.target.attributes[0].nodeValue;
    this.state.windowLocation = jumpLocation;
    const anchorElement = document.getElementById(jumpLocation).offsetTop;
    window.scrollTo(0, anchorElement);
  }

  render() {
    return (
      <nav>
        {(() => {
          if (this.state.isWideScreen) {
            return (
              <NavWide>
                {this.state.menuItems.map(item =>
                  <li key={item.text} className='navbar-item'>
                  <NavItem linkClick={this.scrollToWindowPosition} {...item}/>
                  </li>)
                }
              </NavWide>);
          }
          return (
            <NavNarrow toggle={this.toggleDropdown}
            isOpen={this.state.isDropdownOpen}>
              <div className='dropdown-items'>
              {this.state.menuItems.map(item =>
                <NavItem linkClick={this.scrollToWindowPosition}
                key={item.text} {...item}/>)
              }
              </div>
            </NavNarrow>);
        })()}
      </nav>
    );
  }
}
