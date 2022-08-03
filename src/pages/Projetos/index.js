import React from 'react';
import './index.scss'

import { Link } from 'react-router-dom';
import EstruturaPagina from '../../components/EstruturaPagina';
import cx from 'classnames';



export default function Projetos() {

  const ambientes = ['banheiro', 'cozinha', 'quarto']
    .map((ambiente) => {
      return (
        <div className={cx(ambiente, 'ambiente', 'centralizar', 'flex')}>
          <Link to={`/projetos/${ambiente}`}>{ambiente.toUpperCase()}</Link>
        </div>
      );
    });
  return (
    <EstruturaPagina title='Hands Móveis | Projetos'>
      <div id='Projetos' className="centralizar flex">
        <div className="container centralizar flex">
          <h1>Escolha seu <span>Ambiente</span></h1>
          <p>Temos as melhores soluções em móveis planejados para todos os ambientes da casa. Inspire-se à vontade.</p>
          <nav className="centralizar flex-row wrap">
            {ambientes}
          </nav>
        </div>

      </div>
    </EstruturaPagina >
  )
};