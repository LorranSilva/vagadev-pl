import React from 'react';
import './destaques.scss';

const Destaque = ({ title, price, imageSrc, addToCart }) => {
  return (
    <>
        <div>
            <img alt={title} src={imageSrc} className="destaque-img" />
            <h3>{title}</h3>
            <p>{price}</p>
            <button><p className="button-text" onClick={addToCart}>Comprar</p></button>
        </div>
    </>
  );
};

export default Destaque;
