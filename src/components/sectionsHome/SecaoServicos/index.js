import React from 'react';
import './style.css';

import Card from '../../Card';
import EstruturaSecao from '../EstruturaSecao';

export default function SecaoServicos() {
  return (
    <section id='SecaoServicos' className='SecaoServicos flex'>
      <EstruturaSecao titulo='NOSSOS SERVIÇOS'>
        <div className="cardDeck flex-row">
          <Card
            label='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            img='./assets/default.png' imgAlt='Imagem'
          />
          <Card
            label='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            img='./assets/default.png' imgAlt='Imagem'
          />
          <Card
            label='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            img='./assets/default.png' imgAlt='Imagem'
          />
        </div>
      </EstruturaSecao>
    </section>
  );
}