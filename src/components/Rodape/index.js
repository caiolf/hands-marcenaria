import React from 'react';
import './style.css';


export default function Rodape() {
  return (
    <div id='Rodape' className="Rodape flex centralizar">
      <div className="limitar-div flex">
        <div className="rodape-div flex-row">
          <div className="rodape-logo flex">
            <img src="./assets/logo.svg" alt="" />
          </div>
          <div className="rodape-menu">
            <h2>Navegação</h2>
            <p>Home</p>
            <p>Sobre</p>
            <p>Portfolio</p>
            <p>Contato</p>
          </div>
          <div className="rodape-midia">
            <h2>Siga-nos nas redes sociais</h2>
            <a href="https://www.instagram.com/handsmoveisplanejados_/?hl=pt-br" target='_blank'><div className='flex-row centralizar'><img src="https://cdn-icons.flaticon.com/png/512/3955/premium/3955024.png?token=exp=1658950094~hmac=c9b68812233dcd1d607b2aa00d8f1725" alt="IG" /><p>Instagram</p></div></a>
            <a href="https://www.facebook.com/handsmoveis" target='_blank'><div className='flex-row centralizar'><img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="FB" /><p>Facebook</p></div></a>
            <a href="https://http.cat/404" target='_blank'><div className='flex-row centralizar'><img src="https://cdn-icons-png.flaticon.com/512/145/145808.png" alt="PI" /><p>Pintrest</p></div></a>
            <a href="https://http.cat/404" target='_blank'><div className='flex-row centralizar'><img src="https://cdn-icons-png.flaticon.com/512/2913/2913990.png" alt="GM" /><p>Gmail</p></div></a>
          </div>
        </div>
        <p className='copyright'>Copyright © 2022 HANDS Marcenaria | Todos os direitos reservados. | Desenvolvimento | TIGON</p>
      </div>

    </div>
  );
}