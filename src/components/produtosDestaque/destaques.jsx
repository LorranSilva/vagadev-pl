import React from 'react';
import './destaques.scss';
import { useMediaQuery } from 'react-responsive';

const Destaque = ({ title, price, buttonId, imageSrc, addToCart }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  if(isMobile){
    return (
      <>
        <div className="div-destaque">
          <div className="img-destaque">
            <img alt={title} src={imageSrc} className="destaque-img" />
          </div>
          <div className="container-destaques">
            <div className="details-destaques">
              <p className="title">{title}</p>
              <p className="price">{price}</p>
            </div>
            <div>
              <button id={buttonId}>
                <p className="button-text" onClick={addToCart}>COMPRAR</p>
              </button>
            </div>
          </div>
        </div >
      </>
    );
  }
  return (
    <>
      <div className="div-destaque">
        <div className="img-destaque">
          <img alt={title} src={imageSrc} className="destaque-img" />
        </div>
        <div className="container-destaques">
          <div className="details-destaques">
            <p className="title">{title}</p>
            <p className="price">{price}</p>
          </div>
          <div>
            <button id={buttonId}>
              <p className="button-text" onClick={addToCart}>COMPRAR</p>
            </button>
          </div>
        </div>
      </div >
    </>
  );
};
export default Destaque;
