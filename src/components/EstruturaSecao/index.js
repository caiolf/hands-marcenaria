import React from 'react';
import './style.css';

export default function EstruturaSecao(props) {
  return (
    <section className='EstruturaSecao flex centralizar'>
      <div className="limitar-div flex container centralizar">
        <h1>{props.titulo}</h1>
        {props.children}
      </div>
    </section >
  );
}