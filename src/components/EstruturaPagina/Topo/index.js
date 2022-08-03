
import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export default function Topo() {


  const links = ['home', 'sobre', 'projetos', 'contato']
    .map((link) => {
      return (
        <div className='link-nav'>
          <Link
            to={`/${link == 'home' ? '' : link}`}>
            {link.toUpperCase()}
          </Link>
        </div>
      );
    });


  return (
    <div id='Topo' className="Topo">
      <div className="capa flex">
        <Link to='/'><img src="./assets/logo.svg" alt="Logo HANDS" /></Link>
      </div>
      <div className="menu flex">
        <nav className='flex-row limitar-div'>
          {links}
        </nav>
      </div>
    </div >
  )
}


