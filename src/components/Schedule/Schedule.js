/* eslint-disable */
import React, {Component} from 'react';
import Slider from 'react-slick';
import './schedule.css';
import SchedueleObject from './utilities/scheduleobject';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  customPaging: function l(i) {
    return (
      <a>
        <img width='20' height='20' src='/src/assets/ShellHacks_Logo_White@4x.png' />
      </a>
    );
  },
};

 class Schedule extends Component {
  constructor(props){
    super(props);
    this.state = {
      eventsFriday: [
        {
          id : 1,
          title : "Event 1",
          time: '11:00',
          description: "Event Description"
        },
        {
          id : 2,
          title : "Event 2",
          time: '11:00',
          description: "Event Description"
        },
        {
          id : 3,
          title : "Event 3",
          time: '11:00',
          description: "Event Description"
        },
        {
          id : 4,
          title : "Event 4",
          time: '11:00',
          description: "Event Description"
        },
        {
          id : 5,
          title : "Event 5",
          time: '11:00',
          description: "Event Description"
        }
      ],
      eventsSaturday: [
        {
          id : 1,
          title : "Event 1",
          time: '11:00',
          description: "Event Description"
        },
        {
          id : 2,
          title : "Event 2",
          time: '11:00',
          description: "Event Description"
        },
        {
          id : 3,
          title : "Event 3",
          time: '11:00',
          description: "Event Description"
        },
        {
          id : 4,
          title : "Event 4",
          time: '11:00',
          description: "Event Description"
        },
        {
          id : 5,
          title : "Event 5",
          time: '11:00',
          description: "Event Description"
        }
      ],
      eventsSunday: [
        {
          id : 1,
          title : "Event 1",
          time: '11:00',
          description: "Event Description"
        },
        {
          id : 2,
          title : "Event 2",
          time: '11:00',
          description: "Event Description"
        },
        {
          id : 3,
          title : "Event 3",
          time: '11:00',
          description: "Event Description"
        },
        {
          id : 4,
          title : "Event 4",
          time: '11:00',
          description: "Event Description"
        },
        {
          id : 5,
          title : "Event 5",
          time: '11:00',
          description: "Event Description"
        }
      ],
    }
  }

  render(){
    return (
      <div className='schedule-container'>
          <div className='schedule-content'>
          <h1> Schedule </h1>
  
        <Slider {...settings}>
          <div className="text">
          <div className = "day">
          <h2 > Friday </h2>
          </div>
          {this.state.eventsFriday.map(qAndA => <SchedueleObject {...qAndA}
      key={qAndA.id} />)}
          </div>
          <div className="text">
          <div className = "day">
          <h2> Saturday </h2>
          </div>
          {this.state.eventsSaturday.map(qAndA => <SchedueleObject {...qAndA}
      key={qAndA.id} />)}
          </div>
          <div className="text">
          <div className = "day">
          <h2> Sunday </h2>
          </div>
          {this.state.eventsSunday.map(qAndA => <SchedueleObject {...qAndA}
      key={qAndA.id} />)}
          </div>
        </Slider>
        <br/>
        <br/>
      </div>
      </div>
    );
  }
}

export default Schedule
