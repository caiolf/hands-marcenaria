import React from 'react';

import Topo from './Topo';
import Rodape from './Rodape';

import Wpp from '../../components/Wpp';
import { Helmet } from 'react-helmet';

export default function EstruturaPagina(props) {
  return (
    <div>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
      <Topo></Topo>
      {props.children}
      <Rodape></Rodape>
      <Wpp />
    </div >
  );
}