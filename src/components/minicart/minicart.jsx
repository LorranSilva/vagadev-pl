import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './minicart.scss';

const MiniCart = ({ cartItems: initialCartItems }) => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  useEffect(() => {
    // Recuperar o carrinho do localStorage ao montar o componente
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (savedCartItems) {
      setCartItems(savedCartItems);
    }
  }, []);

  useEffect(() => {
    // Salvar o carrinho no localStorage sempre que ele for atualizado
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
  
  const [cep, setCep] = useState('');
  const [frete, setFrete] = useState(null);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    Object.keys(cartItems).forEach((item) => {
      const cartItem = cartItems[item];
      totalPrice += parseFloat(cartItem.price);
    });
    return totalPrice;
  };

  const handleCepChange = (event) => {
    setCep(event.target.value);
  };

  const handleCalculateFrete = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      console.log(response.data)
      setFrete(response.data);
    } catch (error) {
      console.error(error);
      setFrete(null);
    }
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
                  <input
                    type="text"
                    value={cep}
                    onChange={handleCepChange}
                    placeholder="Digite o CEP"
                  />
                  <button onClick={handleCalculateFrete}>Calcular Frete</button>
                  {frete && (
                    <p>Valor do Frete: Grátis</p>
                  )}
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
