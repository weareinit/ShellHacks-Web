import React from 'react';

import './about.css';

export default function About() {
  return (
    <div className='about-container' id='about-section'>
    <div className='about-content'>
      <div className='about-image'></div>
      <div className='about-text'>
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
