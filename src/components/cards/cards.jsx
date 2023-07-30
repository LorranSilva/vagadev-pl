import React from 'react';
import './cards.scss';

const Card = ({ title, imageSrc }) => {
  return (
    <div className='card-subcontainer'>
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-details-box">
        <h3 className="card-text">{title}</h3>
        <div className='card-line'></div>
      </div>
    </div>
  );
};

export default Card;