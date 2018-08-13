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

const MainApp = props => (
  <div className='app'>
    <Nav />
    <div className='bg1'>
    <Banner isLoggedIn={props.isLoggedIn} logIn={props.logInFunc}/>
    <About />
    <Schedule />
    </div>
    <Sponsors />
    <Faq />
    <Footer />
  </div>
);

// hold state to know if there is an active user session
/*eslint-disable */
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    }

    this.logIn = this.logIn.bind(this);
    this.hydrateStateWithLocalStorage = this.hydrateStateWithLocalStorage.bind(this);
  }
  
  /*eslint-disable */
  hydrateStateWithLocalStorage() {
    for (let key in Object.keys(this.state)) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({[key]: value});
        } catch(e) {
          this.setState({[key]: value});
        }
      }
    }
  }

  logIn() {
    console.log("clicked!");
    this.setState({ isLoggedIn: true });
    localStorage.setItem('jwt', 'token-string');
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={routeProps => <MainApp {...routeProps} isLoggedIn={this.state.isLoggedIn} logInFunc={this.logIn} />}></Route>
          <Route path='/register' component={RegisterApp}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/dashboard' component={Dashboard}></Route>
          <Route path='/sponsors' component={Sponsors}></Route>
        </Switch>
      </Router>
    );
  }
}
