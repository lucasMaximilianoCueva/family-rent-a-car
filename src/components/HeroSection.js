import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1 id='inicio'>LA AVENTURA TE ESPERA</h1>
      <p></p>
      <div className='hero-btns'>
        <a href='#flota' className='btns' style={{color:"white", textDecoration:"none"}}>

          COMENZAR

        </a>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
