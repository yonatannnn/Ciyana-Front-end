import React from 'react';
import '../styles/Advertisement.css'; // Assuming you have your CSS here

function Advertisement({ imageUrl, altText , mainHeading , description , buttonText }) {
  return (
    <div className="advertisement-container">
        <div className="advertisement-text">
        <h2>{mainHeading}</h2>
        <p>{description}</p>
        <button className="advertisement-btn">{buttonText}</button>
      </div>
      <img src={imageUrl} alt={altText} className="advertisement-image" />
    </div>
  );
}

export default Advertisement;
