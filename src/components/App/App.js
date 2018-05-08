import React from 'react';

import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import About from '../About/About';
import Events from '../Events/Events';
import Sponsors from '../Sponsors/Sponsors';

import './app.css';

export default function App() {
  return (
    <div className='app'>
      <Nav />
      <Banner />
      <About />
      <Events />
      <Sponsors />
      <Footer />
    </div>
  );
}
