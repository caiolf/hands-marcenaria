import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Topo = () => (
  <div id='Topo' className="Topo">
    <div className="capa flex">
      <Link to='/'><img src="./assets/logo.svg" alt="Logo HANDS" /></Link>
    </div>
    <div className="menu flex">
      <nav className='flex-row limitar-div'>
        <div className="link-nav"><Link to='/'>Home</Link></div>
        <div className="link-nav"><Link to='/sobre'>Sobre</Link></div>
        <div className="link-nav"><Link to='/projetos'>Projetos</Link></div>
        <div className="link-nav"><Link to="/contato">Contato</Link></div>
      </nav>
    </div>
  </div >
)
export default Topo;