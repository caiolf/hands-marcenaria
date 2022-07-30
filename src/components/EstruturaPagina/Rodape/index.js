import React from 'react';
import './style.css';


export default function Rodape() {
  return (
    <footer id='Rodape' className="Rodape flex centralizar">
      <div className="limitar-div flex">
        <div className="rodape-div flex-row">
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
            <h2>Siga-nos nas redes sociais</h2>
            <nav>
              <a href="https://www.instagram.com/handsmoveisplanejados_/?hl=pt-br" target='_blank'><div className='flex-row centralizar'><img src="https://www.catholiccharitiesdc.org/wp-content/uploads/2018/10/instagram-colourful-icon.png" alt="IG" />Instagram</div></a>
              <a href="https://www.facebook.com/handsmoveis" target='_blank'><div className='flex-row centralizar'><img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="FB" />Facebook</div></a>
              <a href="https://http.cat/404" target='_blank'><div className='flex-row centralizar'><img src="https://cdn-icons-png.flaticon.com/512/145/145808.png" alt="PI" />Pintrest</div></a>
              <a href="https://http.cat/404" target='_blank'><div className='flex-row centralizar'><img src="https://cdn-icons-png.flaticon.com/512/2913/2913990.png" alt="GM" />Gmail</div></a>
            </nav>
          </div>
        </div>
        <p className='copyright'>
          Copyright © 2022 HANDS Marcenaria | Todos os direitos reservados | Desenvolvido de 🖤 por{' '}
          <a href="https://caiolf.github.io/Projeto-Linktree/" target='_blank'>@caiolf</a>
        </p>
      </div>

    </footer >
  );
}