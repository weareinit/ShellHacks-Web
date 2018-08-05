import React from 'react';
import Slider from 'react-slick';

import './schedule.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Schedule() {
  return (
    <div className='schedule-container' id='schedule'>
        <div className='schedule-content'>
        <h1> Schedule </h1>

      <Slider {...settings}>
        <div className="text">
        <h2> Friday </h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Cras auctor tempus metus, non dignissim enim blandit a. Aenean
      sollicitudin turpis et enim vehicula eleifend. Sed non ipsum leo.
      Quisque id lectus sed arcu bibendum tempus non sit amet augue.
      Curabitur leo ante, lacinia vel lobortis ac, luctus vel neque.
      Maecenas gravida sed felis eget eleifend. Duis sem orci, aliquet
      at tortor quis, convallis suscipit erat. Quisque sed rutrum neque.
      Phasellus eget nisi dignissim, dapibus arcu non, pulvinar est.
      Donec tellus lacus, feugiat non ante id, elementum vehicula nisi.
      Vestibulum magna orci, scelerisque id dapibus porta, varius ac odio.</p>
        </div>
        <div className="text">
        <h2> Saturday </h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Cras auctor tempus metus, non dignissim enim blandit a. Aenean
      sollicitudin turpis et enim vehicula eleifend. Sed non ipsum leo.
      Quisque id lectus sed arcu bibendum tempus non sit amet augue.
      Curabitur leo ante, lacinia vel lobortis ac, luctus vel neque.
      Maecenas gravida sed felis eget eleifend. Duis sem orci, aliquet
      at tortor quis, convallis suscipit erat. Quisque sed rutrum neque.
      Phasellus eget nisi dignissim, dapibus arcu non, pulvinar est.
      Donec tellus lacus, feugiat non ante id, elementum vehicula nisi.
      Vestibulum magna orci, scelerisque id dapibus porta, varius ac odio.</p>
        </div>
        <div className="text">
        <h2> Sunday </h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Cras auctor tempus metus, non dignissim enim blandit a. Aenean
      sollicitudin turpis et enim vehicula eleifend. Sed non ipsum leo.
      Quisque id lectus sed arcu bibendum tempus non sit amet augue.
      Curabitur leo ante, lacinia vel lobortis ac, luctus vel neque.
      Maecenas gravida sed felis eget eleifend. Duis sem orci, aliquet
      at tortor quis, convallis suscipit erat. Quisque sed rutrum neque.
      Phasellus eget nisi dignissim, dapibus arcu non, pulvinar est.
      Donec tellus lacus, feugiat non ante id, elementum vehicula nisi.
      Vestibulum magna orci, scelerisque id dapibus porta, varius ac odio.</p>
        </div>
      </Slider>
      <br/>
      <br/>
    </div>
    </div>
  );
}
