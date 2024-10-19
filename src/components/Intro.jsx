import React from 'react';
import logo from '../assets/images/ciyana-high-resolution-logo.png';
import '../styles/Intro.css';

const Intro = () => {
  return (
    <div className="intro-container">
      <img src={logo} alt="Ciyana Logo" className="intro-logo" />
      <h1 className="intro-heading">Shop Smart, Shop Ciyana</h1>
    </div>
  );
}

export default Intro;
