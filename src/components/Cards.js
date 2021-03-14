import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Testimonials</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/src/images/i1.jpg'
              text='hey there'
              label='Read more'
              path='/services'
            />
            <CardItem
              src='/src/images/i2.jpg'
              text='hey this is Iris, working at GS'
              label='Read more'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/src/images/i3.jpg'
              text='heyaaaa'
              label='Read more'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;