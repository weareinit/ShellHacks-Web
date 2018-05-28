import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import About from '../About/About';
import RegisterApp from '../Auth/Register/RegisterApp';
import Schedule from '../Schedule/Schedule';
import Sponsors from '../Sponsors/Sponsors';

import './app.css';

const MainApp = () => (
  <div className='app'>
    <Nav />
    <Banner />
    <About />
    <Schedule />
    <Sponsors />
    <Footer />
  </div>
);

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={MainApp}></Route>
      <Route path='/register' component={RegisterApp}></Route>
    </Switch>
  </Router>
);

export default App;
