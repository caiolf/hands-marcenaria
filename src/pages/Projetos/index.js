import React from 'react';
import './styles.css'
import { Helmet } from 'react-helmet';

import ConjuntoImagem from './ConjuntoImagens';
import EstruturaPagina from '../../components/EstruturaPagina';
export default function Projetos() {

  return (
    <>
      <Helmet><title>HANDS - Imagens</title></Helmet>
      <EstruturaPagina>
        <section className="galeria flex centralizar">
          <div className='galeria-div limitar-div flex-row wrap centralizar'>
            <ConjuntoImagem className='imgs' />
          </div>
        </section>

      </EstruturaPagina >
    </>

  )
};