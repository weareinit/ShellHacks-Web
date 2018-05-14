import React from 'react';

import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import About from '../About/About';
import Schedule from '../Schedule/Schedule';
import Sponsors from '../Sponsors/Sponsors';

import './app.css';

export default function App() {
  return (
    <div className='app'>
      <Nav />
      <Banner />
      <div className='about-background' />
      <About />
      <Schedule />
      <Sponsors />
      <Footer />
    </div>
  );
}
