import React from 'react';
import { Helmet } from 'react-helmet';

import SecaoIntro from '../../components/sectionsHome/SecaoIntro';
import SecaoServicos from '../../components/sectionsHome/SecaoServicos';
import SecaoImagens from '../../components/sectionsHome/SecaoImagens';
import SecaoClientes from '../../components/sectionsHome/SecaoClientes';
import SecaoFeedbacks from '../../components/sectionsHome/SecaoFeedbacks';
import SecaoContato from '../../components/sectionsHome/SecaoContato';

import EstruturaPagina from '../../components/EstruturaPagina';
export default function Home() {

  return (
    <>
      <Helmet>
        <title>Hands marcenaria - Florianópolis</title>
      </Helmet>
      <EstruturaPagina>
        <SecaoIntro />
        <SecaoServicos />
        <SecaoImagens />
        <SecaoClientes />
        <SecaoFeedbacks />
        <SecaoContato />
      </EstruturaPagina >
    </>
  )
};