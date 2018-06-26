import React from 'react';

import './faqElem.css';

const FaqElem = props => (
  <div className='faq-elem'>
    <h3>{props.question}</h3>
    <p>{props.answer}</p>
  </div>
);

export default FaqElem;
