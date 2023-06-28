import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Explora Ushuaia en el vehículo que más se adapte a vos.
        </p>
        <p className='footer-subscription-text'>
          Suscribirse para recibir nuestras novedades.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Quienes somos</h2>
            <Link to='/sign-up'>Como funciona</Link>
            <Link to='/'>Servicios</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contacto</h2>
            <Link to='/'>Whatsapp</Link>
            <Link to='/'>Suporte</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Flota</h2>
            <Link to='/'>Vehículos</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Redes</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Ush Rent a Car
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>URC © 2023</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
