import React from 'react';
import './App.css';
import { Button } from './Button';
import './HomeDisc.css';

function HomeDisc() {
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

      </div>
    </div>
  );
}

export default HomeDisc;