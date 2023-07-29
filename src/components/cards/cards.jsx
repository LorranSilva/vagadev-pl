import React from 'react';
import './cards.scss';

const Card = ({ title, text, imageSrc }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{text}</p>
    </div>
  );
};

export default Card;