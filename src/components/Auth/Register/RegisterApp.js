/* eslint-disable */
import React,{Component} from 'react';
import Select from 'react-select';

import Nav from '../../Nav/Nav';

import './../auth.css';


let optionsGender = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
  { value: 'Prefer', label: 'Prefer Not to Say' },
  {value: 'other', label: 'other'},
];

class RegisterApp extends Component {

  constructor(){
    super();
    this.handleChangeGender = this.handleChangeGender.bind(this);
    this.handleChangeMajor = this.handleChangeMajor.bind(this);
    this.handleChangeSchool = this.handleChangeSchool.bind(this);

    this.state = {
      majorOptions: [],
      schoolOptions: [],
      selectedGender: null,
      selectedMajor: null,
      selectedSchool: null,
    }

  }

  handleChangeGender (selectedGender){
    this.setState({ selectedGender });
    console.log(`Option selected:`, selectedGender);
  }

  handleChangeMajor (selectedMajor){
    this.setState({ selectedMajor });
    console.log(`Option selected:`, selectedMajor);
  }

  handleChangeSchool (selectedSchool){
    this.setState({ selectedSchool });
    console.log(`Option selected:`, selectedSchool);
  }

  componentWillMount(){
    let response;
    let data;

    fetch('https://api.shellhacks.net/info/majors').then(response = (data) => {
    return data.json();
    }) 
    .then(data = (data) => {
      let majors = [];
      for(let i = 0; i<data.length; i++){
        let format = {value: data[i].id,label: data[i].major}
        majors.push(format)
      }
      this.setState({majorOptions: majors})
    })

    fetch('https://api.shellhacks.net/info/schools').then(response = (data) => {
      return data.json();
    })
    .then(data = (data) => {
      let schools = []
      for(let i = 0; i< data.length; i++){
        let format = {value: data[i].id,label: data[i].name}
        schools.push(format);
      }
      this.setState({schoolOptions: schools})
    })
  }

  componentDidMount(){
    console.log('mounted')
    
  }
  render(){

    const { selectedGender } = this.state;
    const { selectedMajor } = this.state;
    const { selectedSchool } = this.state;

  return(

  <div className='container'>
    <Nav />
    <div className='animated fadeIn container-content'>
    <br /> <br /> <br />
      <h1 className='register-header'>Register</h1>
      <br />
      <form method='post'>
      <h2>Enter Email </h2>
        <input className="password" type='email' />
        <h2>Enter Password </h2>
        <input className="password" type='password'/>
        <h2>Confirm Password </h2>
        <input className="password" type='password' />
        <h2>Enter Phone Number </h2>
        <input className="password" type='text' />
        <div className = "select">
      
        <h2>Gender </h2> <br />
        <Select
        value={selectedGender}
        onChange={this.handleChangeGender}
        options={optionsGender}
      />
      </div> <br />
      <input className="password" type='text' placeHolder = "other"/>

      <div className = "select">
      
        <h2>Major </h2> <br />
        <Select
        value={selectedMajor}
        onChange={this.handleChangeMajor}
        options={this.state.majorOptions}
      />
      </div> <br />

      <div className = "select">
      
      <h2>School </h2> <br />
      <Select
      value={selectedSchool}
      onChange={this.handleChangeSchool}
      options={this.state.schoolOptions}
    />
    </div> <br />
        
        <h2>Dietary Restrictions</h2>
        <input className="password" type='text' />
        <h2>LinkedIn URL</h2>
        <input className="password" type='text' />
        <h2>GitHub URL</h2>
        <input  className="password" type='text' />
        <h2 style = {{width: 300}}>What kind of Activities do you want to see?</h2>
        <input className="password" type='text' />
        <button className="btn btnlogin" type='submit' value='Submit'>Register</button>
      </form>
    </div>
  </div>
  )
 }
}

export default RegisterApp;
