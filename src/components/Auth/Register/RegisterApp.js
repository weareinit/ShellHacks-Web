import React from 'react';

import Nav from '../../Nav/Nav';

import './register.css';

const RegisterApp = () => (
  <div className='register'>
    <Nav />
    <div className='signup-container'>
      <h2 className='register-header'>Register</h2>
      <form method='post'>
        <input type='email' placeholder='Enter email*'/>
        <input type='password' placeholder='Enter password*'/>
        <input type='password' placeholder='Confirm password*'/>
        <input type='submit' value='Submit'/>
      </form>
    </div>
  </div>
);

export default RegisterApp;
