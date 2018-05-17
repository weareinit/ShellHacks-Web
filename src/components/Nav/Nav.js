import React from 'react';

import NavWide from './NavWide/NavWide';
import NavNarrow from './NavNarrow/NavNarrow';
import './nav.css';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isWideScreen: true, // if is widescreen, show widenav else show narrownav
      isToggled: false,
      menuItems: [
        {
          text: 'About',
          link: '#',
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
    this.toggleBurger = this.toggleBurger.bind(this);
  }

  toggleBurger() {
    this.setState(prevState => ({ isToggled: !prevState.isToggled }));
  }

  handleResize() {
    if (window.innerWidth >= 480) {
      if (!this.state.isWideScreen) {
        this.setState(prevState => ({ isWideScreen: !prevState.isWideScreen, isToggled: false }));
      }
    } else if (window.innerWidth < 480) {
      if (this.state.isWideScreen) {
        this.setState(prevState => ({ isWideScreen: !prevState.isWideScreen, isToggled: false }));
      }
    }
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <nav>
        {
          (() => {
            if (this.state.isWideScreen) {
              return <NavWide children={this.state.menuItems}/>;
            }
            return <NavNarrow children={this.state.menuItems} toggle={this.toggleBurger}
              isToggled={this.state.isToggled}/>;
          })()
        }
      </nav>
    );
  }
}
