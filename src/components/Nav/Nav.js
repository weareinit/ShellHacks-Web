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
      menuItems: [
        {
          text: 'About',
          link: 'hey',
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
    this.clickTest = this.clickTest.bind(this);
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
    const dropDownItems = document.querySelector('.dropdown-items');
    if (this.state.isDropdownOpen && !prevState.isDropdownOpen) {
      dropDown.addEventListener('click', this.closeDropdown, false);
      dropDownItems.addEventListener('click', this.clickTest, true);
    } else if (!this.state.isDropdownOpen && prevState.isDropdownOpen) {
      dropDown.removeEventListener('click', this.closeDropdown);
      dropDownItems.removeEventListener('click', this.clickTest);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  clickTest(e) {
    console.log(this.state.isDropdownOpen);
    e.stopPropagation();
  }

  render() {
    return (
      <nav>
        {
          (() => {
            if (this.state.isWideScreen) {
              return <NavWide children={this.state.menuItems}/>;
            }
            return <NavNarrow toggle={this.toggleDropdown}
              isOpen={this.state.isDropdownOpen}>
                <div className='dropdown-items'>
                {this.state.menuItems.map(item => <NavItem linkClick={this.clickTest}
                key={item.text} {...item}/>)}
                </div>
              </NavNarrow>;
          })()
        }
      </nav>
    );
  }
}
