import React from 'react';
import './style.css';

import EstruturaSecao from '../EstruturaSecao';
import Botao from '../../components/Botao';


export default function SecaoImagens() {
  return (
    <section id='SecaoImagens' className='SecaoImagens flex'>
      <EstruturaSecao titulo='IMAGENS'>
        <div className="imagens flex-row centralizar">
          <img src="./assets/default.png" alt="" />
          <img src="./assets/default.png" alt="" />
          <img src="./assets/default.png" alt="" />
          <img className='someCelular' src="./assets/default.png" alt="" />
          <img className='someCelular' src="./assets/default.png" alt="" />
          <img className='someCelular' src="./assets/default.png" alt="" />
        </div>
        <Botao>
          Ver mais
        </Botao>
      </EstruturaSecao>
    </section>
  );
}