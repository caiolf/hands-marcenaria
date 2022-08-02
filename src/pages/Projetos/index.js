import React from 'react';
import './index.scss'

import { Link } from 'react-router-dom';
import EstruturaPagina from '../../components/EstruturaPagina';
import cx from 'classnames';



export default function Projetos() {

  return (
    <EstruturaPagina title='Hands Móveis | Projetos'>
      <div id='Projetos' className="centralizar flex">
        <nav className="container centralizar flex-row wrap">
          {['banheiro', 'cozinha', 'quarto'].map((ambiente) => {
            return (
              <div className={cx(ambiente, 'ambiente', 'centralizar', 'flex')}>
                <Link to={`/projetos/${ambiente}`}>{ambiente.toUpperCase()}</Link>
              </div>
            )
          })}
        </nav>
      </div>
    </EstruturaPagina >
  )
};