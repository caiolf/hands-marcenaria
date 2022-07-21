import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Topo = () => (
  <div id='Topo' className="Topo">
    <div className="capa flex">
      <img src="./assets/logo.svg" alt="Logo HANDS" />
    </div>
    <div className="menu flex">
      <nav className='flex-row limitar-div'>
        <Link to='/'>Home</Link>
        <Link to='/sobre'>Sobre</Link>
        <Link to='/portfolio'>Portifólio</Link>
        <a href="#Contato">Contato</a>
      </nav>
    </div>
  </div >
)
export default Topo;