import React from 'react';

import Nav from '../../Nav/Nav';
import './../auth.css';

export default function login() {
  return (
  <div className='container'>
    <Nav />
    <div className='animated fadeIn container-content'>
    <br /> <br /> <br />
    <h1> Login </h1><br />
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
  );
}
