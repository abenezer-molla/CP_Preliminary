import React from 'react';
import './App.css';
import { Button } from './Button';
import './HomeDisc.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      
      <h1>WELCOME</h1>
      <p>WE ARE HERE TO SERVE YOU</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH INTRO VIDEO<i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;