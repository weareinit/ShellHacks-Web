import React from 'react';

import './faqElem.css';

const FaqElem = props => (
  <div className='faq-elem'>
    <h3>{props.question}</h3>
    <p>{props.answer}</p>
    <div className="img">
    <img width="40" height="40"src='/src/assets/ShellHacks_Logo_White@4x.png' />
    </div>
  </div>
);

export default FaqElem;
