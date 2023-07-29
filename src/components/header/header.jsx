import React, {useState} from "react";
import MiniCart from "../minicart/minicart.jsx";
import logoImg from "../../assets/svgs/Logo_N1_Rush_fundo_escuro_bg_tranparente 1.svg";
import "./header.scss"

const Navbar = ({ cartItems }) => {
    const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);
  
    const toggleMiniCart = () => {
      setIsMiniCartOpen((prev) => !prev);
    };
  
    return (
      <header>
        <nav className='nav'>
          <div className="nav-item">Menu</div>
          <div className="nav-item"><img src={logoImg} alt="Logo"></img></div>
          <div className="nav-item">Contato</div>
          <div className="nav-item">Buscar</div>
          <div className="nav-item mini-cart-item">
            <i className="fas fa-shopping-bag" onClick={toggleMiniCart}></i>
            {cartItems.length > 0 && <span className="item-count">{cartItems.length}</span>}
            {isMiniCartOpen && <MiniCart cartItems={cartItems} />}
          </div>
        </nav>
      </header>
    );
  };

  export default Navbar;
  