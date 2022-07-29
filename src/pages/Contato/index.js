import React from 'react';
import { Helmet } from 'react-helmet';

import SecaoContato from '../../components/sectionsHome/SecaoContato'
import EstruturaPagina from '../../components/EstruturaPagina';
export default function Contato() {

  return (
    <>
      <EstruturaPagina title='Hands Móveis | Contato'>
        <h1>CONTATO</h1>
        <SecaoContato />
      </EstruturaPagina >
    </>
  )
};