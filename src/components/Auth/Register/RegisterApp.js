/* eslint-disable */
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
        <h2>Enter Phone Number </h2>
        <input className="password" type='text' />
        <h2>Gender </h2>
        <input type="radio" value="female" name="female"  />
        <input type="radio" value="male" name="male"  />
        <input type="radio" value="Prefer Not to say" name="Prefer Not to say"  />
        <input className="password" type='text' placeHolder = "other"/>
        <h2>Dietary Restrictions</h2>
        <input className="password" type='text' />
        <h2>LinkedIn URL</h2>
        <input className="password" type='text' />
        <h2>GitHub URL</h2>
        <input  className="password" type='text' />
        <h2 style = {{width: 300}}>What kind of Activities do you want to see</h2>
        <input className="password" type='text' />
        <button className="btn btnlogin" type='submit' value='Submit'>Register</button>
      </form>
    </div>
  </div>
);

export default RegisterApp;
