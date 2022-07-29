import React from 'react';
import SecaoIntro from '../../components/sectionsHome/SecaoIntro';
import EstruturaPagina from '../../components/EstruturaPagina';
import { Helmet } from 'react-helmet';

export default function Sobre() {

  return (
    <>
      <Helmet><title>HANDS - Sobre</title></Helmet>
      <EstruturaPagina className='Sobre'>
        <SecaoIntro />
      </EstruturaPagina >
    </>

  )
};