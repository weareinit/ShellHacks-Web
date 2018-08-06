import React from 'react';

import NavWide from './NavWide/NavWide';
import NavNarrow from './NavNarrow/NavNarrow';
import NavItem from './NavItem/NavItem';
import NavScroll from './NavScroll/NavScroll';
import './nav.css';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isWideScreen: false,
      isDropdownOpen: false,
      isScroll: false,
      windowLocation: '',
      addClass: false,
      menuItems: [
        {
          text: 'About',
          link: 'about-section',
        },
        {
          text: 'Schedule',
          link: 'schedule-section',
        },
        {
          text: 'FAQ',
          link: '#',
        },
        {
          text: 'Sponsors',
          link: 'sponsors-section',
        },
        {
          text: 'Log In',
          link: '#',
        },
      ],
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.scrollToWindowPosition = this.scrollToWindowPosition.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  toggleDropdown() {
    this.setState(prevState => ({ isDropdownOpen: !prevState.isDropdownOpen }));
  }

  closeDropdown() {
    this.setState({ isDropdownOpen: false });
  }

  scrollToWindowPosition(e) {
    e.preventDefault();
    const jumpLocation = e.target.attributes[0].nodeValue;
    this.state.windowLocation = jumpLocation;
    const anchorElement = document.getElementById(jumpLocation).offsetTop;
    window.scrollTo(0, anchorElement);
  }

  handleResize() {
    if (window.innerWidth >= 750) {
      if (!this.state.isWideScreen) {
        this.setState(prevState => ({
          isWideScreen: true,
          isDropdownOpen: false,
        }));
      }
    } else if (window.innerWidth < 750) {
      if (this.state.isWideScreen) {
        this.setState(prevState => ({
          isWideScreen: false,
          isDropdownOpen: false,
        }));
      }
    }
  }
  // toggle() {
  //    this.setState({ addClass: false });
  // }
  handleScroll() {
    console.log('Scrolled'); //check if working
    // this.setState((prevState) => {
    //   return { addClass: !prevState.addClass }
    // });
    //scrolls past the banner section to initiate navbar change, around 700px past top of page
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
      this.setState(prevState => ({
        addClass: true,
      }));
      // console.log('check');
    }
    else {
      this.setState(prevState => ({
        addClass: false,
      }));
    }
  }


  componentWillMount() {
    this.handleResize();
    this.handleScroll();
  }
  
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
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
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    // let addClassScroll = (this.state.addClass ? 'navbar-item' : 'navbar-item-scroll');

    return (
      <nav>
        {(() => {
          if (this.state.isWideScreen && this.state.addClass) {
            return (
              <NavWide>
                {this.state.menuItems.map(item =>
                  <li key={item.text} className='navbar-item'/*className={addClassScroll} onScroll={this.handleScroll}*/>
                  <NavItem linkClick={this.scrollToWindowPosition} {...item}/>
                  </li>)
                }
              </NavWide>);
          }
          // if (this.state.isWideScreen && this.state.addClass) {
          //   console.log('ran');
          //   return (
          //     <NavScroll>
          //       {this.state.menuItems.map(item =>
          //         <li key={item.text} className='navbar-item'/*className={addClassScroll} onScroll={this.handleScroll}*/>
          //         <NavItem linkClick={this.scrollToWindowPosition} {...item}/>
          //         </li>)
          //       }
          //     </NavScroll>);
          // }
          return (
            <NavNarrow toggle={this.toggleDropdown}
            isOpen={this.state.isDropdownOpen}>
              {this.state.menuItems.map(item =>
                <NavItem linkClick={this.scrollToWindowPosition}
                key={item.text} {...item}/>)
              }
            </NavNarrow>);
        })()}
      </nav>
    );
  }
}
