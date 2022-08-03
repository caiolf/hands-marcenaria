import React from 'react';
import './style.css';

import Celular from '../../Celular';
import EstruturaSecao from '../EstruturaSecao';

export default function SecaoFeedbacks() {
  return (
    <section id='SecaoFeedbacks' className='SecaoFeedbacks flex'>
      <EstruturaSecao titulo='Feedbacks'>
        <div className="celulares flex-row centralizar">
          <Celular>Incrível!!! Trabalho muito bem feito, atendeu todas as minhas necessidades.</Celular>
          <Celular>Atendimento excelente! profissionais muito competentes e habilidosos.</Celular>
          <Celular>Minha cozinha ficou linda! impressionante o nível de detalhe e atenção que vcs dão, estão de parabens!</Celular>
        </div>
      </EstruturaSecao>
    </section>
  );
}