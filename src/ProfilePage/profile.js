import React, { Component } from 'react';
import './profile.css';
import Myprofile from './ProfileComponents/Myprofile/Myprofile';
import Qr from './ProfileComponents/QR/Qr';
import Status from './ProfileComponents/Status/status';


/* eslint-disable */
class Profile extends Component {
  constructor() {
    super()
    this.ProfileSwitch = this.ProfileSwitch.bind(this);
    this.QrSwitch = this.QrSwitch.bind(this);
    this.StatusSwitch = this.StatusSwitch.bind(this);
    this.state = {
    	page:"profile"
    };
  }

  ProfileSwitch() {
  	this.setState({page:"profile"});
  }

  QrSwitch() {
  	this.setState({page:"QR"});
  }

  StatusSwitch() {
  	this.setState({page:"status"});
  }

/* eslint-disable */
  render() {
  	if(this.state.page=="profile"){
    return (
		<div className="main" >
			<div className="switch">
				<button className="change" onClick= {this.ProfileSwitch}> Profile </button>
				<button className="change" onClick= {this.QrSwitch}> QR Code </button>
				<button className="change" onClick= {this.StatusSwitch}> Status </button>
			</div>
 		 <Myprofile />
		</div>
    );
}
 	else if(this.state.page=="QR"){
    return (
		<div className="main" >
			<div className="switch">
				<button className="change" onClick= {this.ProfileSwitch}> Profile </button>
				<button className="change" onClick= {this.QrSwitch}> QR Code </button>
				<button className="change" onClick= {this.StatusSwitch}> Status </button>
			</div>
 		 <Qr />
		</div>
    );
}

 	else if(this.state.page=="status"){
    return (
		<div className="main" >
			<div className="switch">
				<button className="change" onClick= {this.ProfileSwitch}> Profile </button>
				<button className="change" onClick= {this.QrSwitch}> QR Code </button>
				<button className="change" onClick= {this.StatusSwitch}> Status </button>
			</div>
 		 <Status />
		</div>
    );
}

}
  
}

export default Profile;


