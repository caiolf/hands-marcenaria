import React from 'react';
import './style.css';

import EstruturaSecao from '../EstruturaSecao';

export default function SecaoClientes() {
  return (
    <section className="SecaoClientes flex">
      <EstruturaSecao titulo='Clientes'>
        <div className="clientes flex-row ">
          <img src="./assets/default.png" alt="CLIENTES" />
          <img src="./assets/default.png" alt="CLIENTES" />
          <img src="./assets/default.png" alt="CLIENTES" />
        </div>
      </EstruturaSecao>
    </section>
  );
}