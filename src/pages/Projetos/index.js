import React from 'react';
import './styles.css'

import ConjuntoImagem from './ConjuntoImagens';
import EstruturaPagina from '../../components/EstruturaPagina';
export default function Projetos() {

  return (
    <>
      <EstruturaPagina title='Hands Móveis | Projetos'>
        <h1>PROJETOS</h1>
        <section className="galeria flex centralizar">
          <div className='galeria-div limitar-div flex-row wrap centralizar'>
            <ConjuntoImagem className='imgs' />
          </div>
        </section>

      </EstruturaPagina >
    </>

  )
};