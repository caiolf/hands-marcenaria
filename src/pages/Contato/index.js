import React from 'react';
import './styles.scss'

import Formulario from '../../components/Formulario';
import EstruturaPagina from '../../components/EstruturaPagina';
export default function Contato() {

  return (
    <>
      <EstruturaPagina title='Hands Móveis | Contato'>
        <main id='Contato' className='centralizar flex'>
          <div className="container limitar-div centralizar flex">

            <h1>Entre em <span>contato</span> conosco</h1>
            <Formulario />
          </div>
        </main>
      </EstruturaPagina >
    </>
  )
};