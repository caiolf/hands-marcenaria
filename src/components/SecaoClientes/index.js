import React from 'react';
import './style.css';

import EstruturaSecao from '../EstruturaSecao';

export default function SecaoClientes() {
  return (
    <section className="SecaoClientes flex">
      <EstruturaSecao titulo='CLIENTES'>
        <div className="clientes flex-row ">
          <img src="./assets/xadrez.jpg" alt="CLIENTES" />
          <img src="./assets/xadrez.jpg" alt="CLIENTES" />
          <img src="./assets/xadrez.jpg" alt="CLIENTES" />
        </div>
      </EstruturaSecao>
    </section>
  );
}