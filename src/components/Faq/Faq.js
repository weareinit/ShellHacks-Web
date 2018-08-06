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
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim, ligula et euismod rhoncus, arcu risus ullamcorper urna, at placerat ante lacus id sem. Quisque laoreet, enim in accumsan maximus, odio ante tempus erat, et vestibulum lorem erat vitae ipsum. Ut nisi orci, aliquam id odio sed, bibendum elementum magna. Etiam vel sapien ex. Proin pulvinar sed mauris ac pharetra. Vivamus placerat vel arcu a congue. Nulla facilisi. In hac habitasse platea dictumst. Quisque non luctus nisl, non venenatis leo. Fusce vel nibh sodales, pharetra risus in, commodo lectus. Ut faucibus posuere lectus eu pellentesque..',
        },
        {
          id: 2,
          question: 'asdf?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim, ligula et euismod rhoncus, arcu risus ullamcorper urna, at placerat ante lacus id sem. Quisque laoreet, enim in accumsan maximus, odio ante tempus erat, et vestibulum lorem erat vitae ipsum. Ut nisi orci, aliquam id odio sed, bibendum elementum magna. Etiam vel sapien ex..',
        },
        {
          id: 3,
          question: 'asdf?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim, ligula et euismod rhoncus, arcu risus ullamcorper urna, at placerat ante lacus id sem. Quisque laoreet, enim in accumsan maximus, odio ante tempus erat.',
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
      <div className='faq-content-container'>
      <h1>Frequently Asked Questions</h1>
      {this.state.questions.map(qAndA => <FaqElem {...qAndA}
      key={qAndA.id} />)}
      </div>
    </div>
    );
  }
}
