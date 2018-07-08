import React, { Component } from 'react';
/* eslint-disable */
class Qr extends Component {
  constructor() {
    super();
    this.state = {
    	
    };
  }


/* eslint-disable */
  render() {
    return (
<div>
  <h3> QR Code </h3><br/>
  <h4> Use this QR Code to check into ShellHacks, you can also tell the staff your 
  code as well </h4>
  <h2>Y457HJ </h2>
  <img src="https://qrcode.tec-it.com/API/QRCode?data=http%3A%2F%2Fwww.twitter.com%2F%255b%255b%255bTECIT%252f%252f%252fTwitter%255d%255d%255d"
  width="50%" height="50%"/>
</div>
    );
  }
}

export default Qr;