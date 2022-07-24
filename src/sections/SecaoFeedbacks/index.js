import React from 'react';
import './style.css';

import Celular from '../../components/Celular';
import EstruturaSecao from '../EstruturaSecao';

export default function SecaoFeedbacks() {
  return (
    <section id='SecaoFeedbacks' className='SecaoFeedbacks flex'>
      <EstruturaSecao titulo='FEEDBACKS'>
        <div className="celulares flex-row centralizar">
          <Celular />
          <Celular />
          <Celular />
        </div>
      </EstruturaSecao>
    </section>
  );
}