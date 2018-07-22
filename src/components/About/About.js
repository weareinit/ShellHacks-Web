import React from 'react';
import ScrollReveal from 'scrollreveal';

import './about.css';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.textRef = React.createRef();
  }

  componentDidMount() {
    const imageConfig = {
      origin: 'bottom',
      duration: 800,
      distance: '30px',
      scale: 0.1,
      opacity: 1,
      easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    };
    const textConfig = {
      origin: 'bottom',
      duration: 1000,
      delay: 600,
      distance: '150px',
      easing: 'ease',
    };
    window.sr = ScrollReveal();
    window.sr.reveal(this.imageRef.current, imageConfig);
    window.sr.reveal(this.textRef.current, textConfig);
  }

  // find cleanup method of ScrollReveal to tear down the object in componentWillUnmount

  render() {
    return (
      <div className='about-container' id='about-section'>
      <div className='about-content'>
        <div className='about-image' ref={this.imageRef}></div>
        <div className='about-text' ref={this.textRef}>
        <h1 className='about-header'>What is ShellHacks?</h1>
        <p>ShellHacks is an upcoming 36-hour hackathon at Florida International University (FIU),
          taking place the weekend of Friday, September 29 to Sunday, October 1st.<br /><br />Our
          mission is to provide students with the opportunity to learn about new technologies,
          create innovative projects, and share their work with the community!</p>
        </div>
      </div>
      </div>
    );
  }
}
