import React from 'react';
import './style.css';

import Botao from '../../components/Botao';

export default function SecaoIntro() {
  return (
    <section id='SecaoIntro' className="SecaoIntro flex">
      <div className='flex-row limitar-div'>
        <div className="introducao flex">
          <h1>Planejando seu espaço</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.</p>
        </div>
        <div className='imgIntro'>
          <img src="https://img.freepik.com/fotos-gratis/cortada-o-homem-vestindo-azul-global-mobiliario-de-desenho-na-folha-de-papel_1098-19104.jpg?w=826&t=st=1658843871~exp=1658844471~hmac=b28a5bf5f63afd4bb5652f181a79a171b278ccd3371ec3e9940900cbeeeb577e" alt="IMAGEM" />
        </div>
      </div>
      <Botao>Saiba mais</Botao>
    </section>
  );
}