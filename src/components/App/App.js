import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import About from '../About/About';
import RegisterApp from '../Auth/Register/RegisterApp';
import Login from '../Auth/Login/login';
import Schedule from '../Schedule/Schedule';
import Sponsors from '../Sponsors/Sponsors';
import Faq from '../Faq/Faq';
import Dashboard from '../Auth/ProfilePage/profile';

import './app.css';

const MainApp = () => (
  <div className='app'>
    <Nav />
    <div className='bg1'>
    <Banner />
    <About />
    <Schedule />
    </div>
    <Sponsors />
    <Faq />
    <Footer />
  </div>
);

// hold state to know if there is an active user session
const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={MainApp}></Route>
      <Route path='/register' component={RegisterApp}></Route>
      <Route path='/login' component={Login}></Route>
      <Route path='/dashboard' component={Dashboard}></Route>
      <Route path='/sponsors' component={Sponsors}></Route>
    </Switch>
  </Router>
);

export default App;
