import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import SecaoIntro from '../../components/SecaoIntro';
import SecaoServicos from '../../components/SecaoServicos';
import SecaoImagens from '../../components/SecaoImagens';
import SecaoClientes from '../../components/SecaoClientes';
import SecaoFeedbacks from '../../components/SecaoFeedbacks';
import SecaoContato from '../../components/SecaoContato';

export default function Home() {

  return (
    <div className='Home'>
      <SecaoIntro />
      <SecaoServicos />
      <SecaoImagens />
      <SecaoClientes />
      <SecaoFeedbacks />
      <SecaoContato />
    </div >
  )
};