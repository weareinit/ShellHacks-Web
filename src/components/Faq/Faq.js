import React from 'react';

import './faq.css';
import FaqElem from './FaqElem/FaqElem';

export default class Faq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          question: 'asdf?',
          answer: 'asdf.',
        },
        {
          question: 'asdf?',
          answer: 'asdf.',
        },
        {
          question: 'asdf?',
          answer: 'asdf.',
        },
        {
          question: 'asdf?',
          answer: 'asdf.',
        },
        {
          question: 'asdf?',
          answer: 'asdf.',
        },
        {
          question: 'asdf?',
          answer: 'asdf.',
        },
      ],
    };
  }

  render() {
    return (
    <div className='faq-container'>
      <div className='faq-content-container'>
      <h1>Frequently Asked Questions</h1>
      {this.state.questions.map(qAndA => <FaqElem {...qAndA} />)}
      </div>
    </div>
    );
  }
}
