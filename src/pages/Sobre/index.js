import React from 'react';
import './styles.scss';

import EstruturaPagina from '../../components/EstruturaPagina';

export default function Sobre() {

  return (
    <>
      <EstruturaPagina title='Hands Móveis | Sobre'>
        <main id='Sobre' className='centralizar flex'>

          <div className="container limitar-div centralizar flex">
            <h1>Móveis <span>planejados</span> e design de interiores</h1>
            <section className='flex-row'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.</p>
              <div className='imagem imagem1'></div>
            </section>
            <section className='flex-row'>
              <div className='imagem imagem2'></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.</p>
            </section>

          </div>
        </main>
      </EstruturaPagina >
    </>

  )
};