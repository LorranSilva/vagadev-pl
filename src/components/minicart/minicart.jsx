import React from 'react';
import './minicart.scss';


const MiniCart = ({ cartItems }) => {

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    Object.keys(cartItems).forEach((item) => {
      const cartItem = cartItems[item];
      totalPrice += parseFloat(cartItem.price);
    });
    return totalPrice;
  };

  return (
    <div className="mini-cart">
      <div className="cart-items">
        <h3>Meu Carrinho</h3>
        {Object.keys(cartItems).length >= 1 ? (
          <>
            <ul>
              {Object.keys(cartItems).map((item, key) => {
                const cartItem = cartItems[item];
                return (
                  <li key={key}>
                    {cartItem.title} - R${cartItem.price}
                  </li>
                );
              })}
            </ul>
            <div>
            {Object.keys(cartItems).length >= 1 && (
              <div className="total-price">
                <p>Total do Carrinho: R${calculateTotalPrice().toFixed(2)}</p>
              </div>
            )}
          </div>
          </>
        ) : (
          <p>O carrinho está vazio.</p>
        )}
      </div>
    </div>
  );
};

export default MiniCart;