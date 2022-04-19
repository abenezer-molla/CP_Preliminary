import React from 'react';
import './SquareDisplay.css';
import CardItem from './CardItem.js';

function Cards() {
  return (
    <div className='cards'>
      <h1>Search For Data Within the Given Departments!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/emergency.jpeg'
              text='Explore for data in Emergency Wing Database'
              label='Emergency Room'
              path='/EmergencyRoom'
            />
            <CardItem
              src='images/pediatrics.jpeg'
              text='Search for data in Pediatric Wing Database'
              label='Pediatrics'
              path='/pediatrics'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/chronic.jpeg'
              text='Explore the Chronic Illness Wing Database '
              label='Chronic Illness'
              path='/chronicill'
            />
            <CardItem
              src='images/internal.jpeg'
              text='Search for data in Internal Medicine Wing Database'
              label='Internal Medicine'
              path='/intermedicine'
            />
            <CardItem
              src='images/obs.jpg'
              text='Search for data in Obstetrics and Gynecology Wing Database'
              label='Obstetrics and Gynecology'
              path='/obsandgyne'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;