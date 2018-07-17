import React from 'react';

import Nav from '../../Nav/Nav';
import './login.css';

export default function login() {
  return (
  <div className='login'>
    <Nav />
    <div className='login-container'>
    <h1> Login </h1><br />
      <div className="form">
      <form>
        <h2> Email </h2>
        <input type = "textfield" />
        <h2> Password </h2>
        <input className="password" type = "textfield" /><br/>
        <button className="btn btnforgot" >Forgot Password?</button>
        <button className="btn btnlogin">Login</button>
      </form>
      </div>
    </div>
  </div>
  );
}
