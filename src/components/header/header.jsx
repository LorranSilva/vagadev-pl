import React, {useState} from "react";
import MiniCart from "../minicart/minicart.jsx";
import logoImg from "../../assets/svgs/Logo_N1_Rush_fundo_escuro_bg_tranparente 1.svg";
import logoBag from "../../assets/svgs/shopping-bag-solid.svg";
import logoSend from '../../assets/svgs/paper-plane.svg'
import logoLupa from '../../assets/svgs/search-solid.svg'
import logoMenu from '../../assets/svgs/icon_hamburguer.svg'
import "./header.scss"

const Navbar = ({ cartItems }) => {
    const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);
  
    const toggleMiniCart = () => {
      setIsMiniCartOpen((prev) => !prev);
    };
  
    return (
      <header>
        <nav className='nav'>
          <div className="nav-item"><img src={logoMenu} alt="menu"></img></div>
          <div className="nav-item"><img src={logoImg} alt="logo"></img></div>
          <div className="nav-item"><img src={logoSend} alt="contact"></img>Contato</div>
          <div className="nav-item"><img src={logoLupa} alt="search"></img>Buscar</div>
          <div className="nav-item mini-cart-item">
            <img src={logoBag} onClick={toggleMiniCart} alt="bag"></img>
            {cartItems.length > 0 && <span className="item-count">{cartItems.length}</span>}
            {isMiniCartOpen && <MiniCart cartItems={cartItems} />}
          </div>
        </nav>
      </header>
    );
  };

  export default Navbar;
  