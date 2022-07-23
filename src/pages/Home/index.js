import React from 'react';
import SecaoIntro from '../../components/SecaoIntro';
import SecaoServicos from '../../components/SecaoServicos';
import SecaoImagens from '../../components/SecaoImagens';
import SecaoClientes from '../../components/SecaoClientes';
import SecaoFeedbacks from '../../components/SecaoFeedbacks';
import SecaoContato from '../../components/SecaoContato';

import EstruturaPagina from '../../components/EstruturaPagina';


export default function Home() {

  return (
    <EstruturaPagina>

      <SecaoIntro />
      <SecaoServicos />
      <SecaoImagens />
      <SecaoClientes />
      <SecaoFeedbacks />
      <SecaoContato />
    </EstruturaPagina >
  )
};