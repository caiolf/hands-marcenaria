import React from 'react';
import './style.css';

export default function Rodape() {
  return (
    <div id='Rodape' className="Rodape flex centralizar">
      <div className="rodape-div limitar-div flex-row centralizar">
        <div className="rodape-logo flex centralizar">
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
          <h2>Redes Sociais</h2>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Pintrest</p>
          <p>Gmail</p>
        </div>
      </div>
    </div>
  );
}