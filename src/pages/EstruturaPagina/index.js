import React from 'react';

import Topo from '../../components/Topo';
import Rodape from '../../components/Rodape';

export default function EstruturaPagina(props) {
  return (
    <div>
      <Topo></Topo>
      {props.children}
      <Rodape></Rodape>
    </div >
  );
}