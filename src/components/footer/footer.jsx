import React from "react";
import logoImg from '../../assets/svgs/logo_header 1.svg'
import './footer.scss';

const Footer = () => {
    return(
        <footer id="rodape">
    <div class="footer-item dark-blue">
        <img alt="n1-logo" src={logoImg} />
    </div>
    <div class="footer-item blue">
      <p>Agência N1 - Todos os direitos reservados</p>
    </div>
  </footer>
    );
};

export default Footer;