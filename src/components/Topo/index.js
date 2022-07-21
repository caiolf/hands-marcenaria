import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Topo() {
  return (
    <div id='Topo' className="Topo">
      <div className="capa flex">
        <img src="./assets/logo.svg" alt="Logo HANDS" />
      </div>
      <div className="menu flex">
        <nav className='flex-row limitar-div'>
          <a href="#Home">Home</a>
          <a href="#Sobre">Sobre</a>
          <a href="#Portfólio">Portifólio</a>
          <a href="#Contato">Contato</a>
        </nav>
      </div>
    </div>
  );
}