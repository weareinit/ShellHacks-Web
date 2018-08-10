/*eslint-disable */

import React,{Component} from 'react';

import './sponsors.css';

let data = [
  {
      "name": "Microsoft",
      "tier": "conch",
      "image": "http://thetriangle.news/wp-content/uploads/2017/10/Microsoft-The-Triangle.jpg",
      "url": "http://microsoft.com"
  },
  {
    "name": "Microsoft",
    "tier": "cone",
    "image": "http://thetriangle.news/wp-content/uploads/2017/10/Microsoft-The-Triangle.jpg",
    "url": "http://microsoft.com"
},{
  "name": "Microsoft",
  "tier": "cone",
  "image": "http://thetriangle.news/wp-content/uploads/2017/10/Microsoft-The-Triangle.jpg",
  "url": "http://microsoft.com"
},
{
  "name": "Microsoft",
  "tier": "cone",
  "image": "http://thetriangle.news/wp-content/uploads/2017/10/Microsoft-The-Triangle.jpg",
  "url": "http://microsoft.com"
},
{
  "name": "Microsoft",
  "tier": "scallop",
  "image": "http://thetriangle.news/wp-content/uploads/2017/10/Microsoft-The-Triangle.jpg",
  "url": "http://microsoft.com"
},
{
  "name": "Microsoft",
  "tier": "scallop",
  "image": "http://thetriangle.news/wp-content/uploads/2017/10/Microsoft-The-Triangle.jpg",
  "url": "http://microsoft.com"
},
{
  "name": "Microsoft",
  "tier": "scallop",
  "image": "http://thetriangle.news/wp-content/uploads/2017/10/Microsoft-The-Triangle.jpg",
  "url": "http://microsoft.com"
},{
  "name": "Microsoft",
  "tier": "scallop",
  "image": "http://thetriangle.news/wp-content/uploads/2017/10/Microsoft-The-Triangle.jpg",
  "url": "http://microsoft.com"
},{
  "name": "Microsoft",
  "tier": "sand-dollar",
  "image": "http://thetriangle.news/wp-content/uploads/2017/10/Microsoft-The-Triangle.jpg",
  "url": "http://microsoft.com"
},{
  "name": "Microsoft",
  "tier": "sand-dollar",
  "image": "http://thetriangle.news/wp-content/uploads/2017/10/Microsoft-The-Triangle.jpg",
  "url": "http://microsoft.com"
},
{
  "name": "Microsoft",
  "tier": "partner",
  "image": "http://thetriangle.news/wp-content/uploads/2017/10/Microsoft-The-Triangle.jpg",
  "url": "http://microsoft.com"
},{
  "name": "Microsoft",
  "tier": "partner",
  "image": "http://thetriangle.news/wp-content/uploads/2017/10/Microsoft-The-Triangle.jpg",
  "url": "http://microsoft.com"
},
{
  "name": "Microsoft",
  "tier": "partner",
  "image": "http://thetriangle.news/wp-content/uploads/2017/10/Microsoft-The-Triangle.jpg",
  "url": "http://microsoft.com"
}
];

class Sponsors extends Component {
    constructor(){
      super();
      this.loadImages = this.loadImages.bind(this);
      this.loadPartners = this.loadPartners.bind(this);
    }

    loadImages (){
      let shell;
      let image;
      let url;
      let sponsors = []
      for(let i = 0; i< data.length; i++){
        if(data[i].tier != 'partner'){
        shell = data[i].tier;
        image = data[i].image;
        url = data[i].url;
        sponsors.push(
          <div><a href = {url}> <img src = {image} className = {shell} /> </a> </div>
        )
      }
    }

      return sponsors;
    }

    loadPartners (){
      let shell;
      let image;
      let url;
      let partners = []
      for(let i = 0; i< data.length; i++){
        if(data[i].tier == 'partner'){
        shell = data[i].tier;
        image = data[i].image;
        url = data[i].url;
        partners.push(
          <div><a href = {url}> <img src = {image} className = {shell} /> </a> </div>
        )
      }
    }

      return partners;
    }

    render(){
      
    
  return (
    <div className='sponsors-container' id='sponsors'>
    <div className='sponsors-content'>
    <h1> Sponsors </h1> 
      {this.loadImages()}
      <h1> Partners </h1>
      {this.loadPartners()}
    </div>

    </div>
  );
}
}

export default Sponsors;
