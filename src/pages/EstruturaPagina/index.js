import React from 'react';

import Topo from '../../components/Topo';
import Rodape from '../../components/Rodape';

import Wpp from '../../components/Wpp';

export default function EstruturaPagina(props) {
  return (
    <div>
      <Topo></Topo>
      {props.children}
      <Rodape></Rodape>
      <Wpp />
    </div >
  );
}