import React from 'react';

import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

import './app.css';

export default function App() {
  return (
    <div className='app'>
      <Nav />
      <Banner />
      <Footer />
    </div>
  );
}
