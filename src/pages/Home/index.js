import React from 'react';
import SecaoIntro from '../../sections/SecaoIntro';
import SecaoServicos from '../../sections/SecaoServicos';
import SecaoImagens from '../../sections/SecaoImagens';
import SecaoClientes from '../../sections/SecaoClientes';
import SecaoFeedbacks from '../../sections/SecaoFeedbacks';
import SecaoContato from '../../sections/SecaoContato';

import EstruturaPagina from '../EstruturaPagina';
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