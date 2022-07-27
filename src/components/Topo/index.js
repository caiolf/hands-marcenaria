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
        <div className="link-nav"><Link to='/'>Home</Link></div>
        <div className="link-nav"><Link to='/sobre'>Sobre</Link></div>
        <div className="link-nav"><Link to='/portfolio'>Portifólio</Link></div>
        <div className="link-nav"><Link to="/contato">Contato</Link></div>



      </nav>
    </div>
  </div >
)
export default Topo;