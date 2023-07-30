import React, { useState } from "react";
import MiniCart from "../minicart/minicart.jsx";
import logoImg from "../../assets/svgs/Logo_N1_Rush_fundo_escuro_bg_tranparente 1.svg";
import logoBag from "../../assets/svgs/shopping-bag-solid.svg";
import logoSend from '../../assets/svgs/paper-plane.svg'
import logoLupa from '../../assets/svgs/search-solid.svg'
import logoMenu from '../../assets/svgs/icon_hamburguer.svg'
import "./header.scss"

const Navbar = ({ cartItems }) => {
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMiniCart = () => {
    setIsMiniCartOpen((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <nav className='nav'>
        <div className="sub-nav">
          <div className="nav-item">
            <img src={logoMenu} alt="menu" onClick={toggleMenu}></img>
            <div className="sub-menu-div">
              {isMenuOpen && (
                <div className="sub-menu-simple">
                  <ul>
                    <li>Games</li>
                    <li>Novos</li>
                    <li>Melhores do ano</li>
                  </ul>
                  <ul>
                    <li>Games</li>
                    <li>Novos</li>
                    <li>Melhores do ano</li>
                  </ul>
                  <ul>
                    <li>Games</li>
                    <li>Novos</li>
                    <li>Melhores do ano</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="nav-item"><img src={logoImg} alt="logo"></img></div>
        </div>

        <div className="sub-nav">
          <div className="nav-item-2">
            <img src={logoSend} alt="contact"></img>
            <p>Contato</p>
          </div>
          <div className="nav-item-2 buscar">
            <img src={logoLupa} alt="search"></img>
            <p>Buscar</p>
          </div>
          <div className="nav-item mini-cart-item">
            <img src={logoBag} onClick={toggleMiniCart} alt="bag"></img>
            {cartItems.length > 0 && <span className="item-count">{cartItems.length}</span>}
            {isMiniCartOpen && <MiniCart cartItems={cartItems} />}
          </div>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
