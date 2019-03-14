import React from 'react';
import StyledFooter from './Footer.style';

const Footer = () => {
  return (
    <StyledFooter>
      <p>develop by Rafael Salas</p>
      <div className='links'>
        <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/rafaelsalass/">
          <i class="fab fa-linkedin"></i>
        </a>
        <a target='_blank' rel="noopener noreferrer" href="https://github.com/Rafaelsalass">
          <i class="fab fa-github"></i>
        </a>
        <a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/rafaelsalass/">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
