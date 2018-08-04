import React from 'react';

import './faq.css';
import FaqElem from './FaqElem/FaqElem';

export default class Faq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          question: 'asdf?',
          answer: 'asdf.',
        },
        {
          id: 2,
          question: 'asdf?',
          answer: 'asdf.',
        },
        {
          id: 3,
          question: 'asdf?',
          answer: 'asdf.',
        },
        {
          id: 4,
          question: 'asdf?',
          answer: 'asdf.',
        },
        {
          id: 5,
          question: 'asdf?',
          answer: 'asdf.',
        },
        {
          id: 6,
          question: 'asdf?',
          answer: 'asdf.',
        },
      ],
    };
  }

  render() {
    return (
    <div className='faq-container'>
      <div className='faq-content'>
      <h1>Frequently Asked Questions</h1>
      {this.state.questions.map(qAndA => <FaqElem {...qAndA}
      key={qAndA.id} />)}
      </div>
    </div>
    );
  }
}
