import React, { Component } from 'react';
/* eslint-disable */
class Myprofile extends Component {
  constructor() {
    super();
    this.state = {
    	
    };
  }


/* eslint-disable */
  render() {
    return (
<div>
  <h3> My Profile </h3><br/>
  <h4> Personal Info </h4>
  <input type="text" value="First Name" readonly />
  <input type="text" value="Last Name" readonly />
  <input type="text" value="Phone Number" readonly />
  <input type="text" value="Email" readonly /><br/>
  <h4> School </h4>
  <input type="text" value="School" readonly />
  <h4> Birthdate </h4>
  <input type="text" value="01/01/1111" readonly />
  <h4> Ethnicity </h4>
  <input type="text" value="Hispanic" readonly />
  <h4> Gender </h4>
  <input type="text" value="Male" readonly />
  <h4> Major </h4>
  <input type="text" value="Computer Science" readonly />
  <h4> Class Standing </h4>
  <input type="text" value="Junior" readonly />
  <h4> Expected Graduation Year </h4>
  <input type="text" value="2020" readonly />
  
</div>
    );
  }
}

export default Myprofile;