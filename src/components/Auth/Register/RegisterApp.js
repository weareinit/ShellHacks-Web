import React from 'react';

import Nav from '../../Nav/Nav';

import './../auth.css';

const RegisterApp = () => (
  <div className='container'>
    <Nav />
    <div className='animated fadeIn container-content'>
      <h1 className='register-header'>Register</h1>
      <form method='post'>
      <h2>Enter Email </h2>
        <input className="password" type='email' />
        <h2>Enter Password </h2>
        <input className="password" type='password'/>
        <h2>Confirm Password </h2>
        <input className="password" type='password' />
        <button className="btn btnlogin" type='submit' value='Submit'>Register</button>
      </form>
    </div>
  </div>
);

export default RegisterApp;
