import React from 'react';

import LoginLink from '../Auth/Login/LoginLink';
import RegisterLink from '../Auth/Register/RegisterLink';
import ProfileLink from '../Auth/ProfilePage/ProfileLink';
import SponsorLink from '../Sponsors/SponsorsLink/SponsorLink';

import './banner.css';

export default function Banner() {
  return (
    <section className='banner' id='banner'>
    <div className='banner-text'>
      <img src='/src/assets/ShellHacks_WordMark_White@4x.png'></img>
      {/* <h1>ShellHacks 2018</h1> */}
      <p className="date">September 21, 2018 | Florida International University</p>
      <p>FIU Miami, Florida</p>
      <div className='banner-buttons'>
        <button><SponsorLink/></button>
        <button><RegisterLink/></button>
        <button><LoginLink/></button>
        <button><ProfileLink /></button>
      </div>
    </div>
    </section>
  );
}
