import React from 'react';
import './style.css';

import Formulario from '../../Formulario';


export default function SecaoContato() {
  return (
    <section id='SecaoContato' className='SecaoContato flex centralizar'>
      <div className="filtro">
        <div className="contato-div limitar-div flex centralizar">
          <Formulario />

        </div>
      </div>

    </section>
  );
}