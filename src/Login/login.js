import React from 'react';
import './login.css';

export default function login() {
  return (
<div>
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
  );
}

