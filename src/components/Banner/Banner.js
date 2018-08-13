import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import LoginLink from '../Auth/Login/LoginLink';
import RegisterLink from '../Auth/Register/RegisterLink';
import ProfileLink from '../Auth/ProfilePage/ProfileLink';

import './banner.css';

const Banner = () => (
  <section className='banner' id='home'>
    <div className='banner-text'>
    <button onClick={this.props.logIn}>test button</button>
    <img src='/src/assets/ShellHacks_WordMark_White@4x.png'></img>
    <div className='banner-info'>
      <p className="date">September 21, 2018 | Florida International University</p>
      <p>FIU Miami, Florida</p>
    </div>
    {(() => {
      if (this.props.isLoggedIn) {
        return (
          <div className='banner-buttons'>
            <button><Link to='/#sponsors'>Sponsors</Link></button>
            <button><ProfileLink /></button>
          </div>
        );
      }
      return (
        <div className='banner-buttons'>
          <button><Link to='/#sponsors'>Sponsors</Link></button>
          <button><RegisterLink/></button>
          <button><LoginLink/></button>
        </div>);
      })()}
    </div>
  </section>
);

export default Banner;
