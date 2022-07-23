import React from 'react';

import Topo from '../Topo';
import Rodape from '../Rodape';

export default function EstruturaPagina(props) {
  return (
    <div>
      <Topo></Topo>
      {props.children}
      <Rodape></Rodape>
    </div >
  );
}