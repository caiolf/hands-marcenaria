import React from 'react';

import EstruturaPagina from '../../../components/EstruturaPagina';
import EstruturaGaleria from '../../../components/EstruturaGaleria';

import { colecaoCozinha } from '../../../lib/colecaoCozinha';

export default function Cozinha() {

  return (
    <EstruturaPagina title='Cozinha | Projetos'>
      <EstruturaGaleria colecao={colecaoCozinha} />
    </EstruturaPagina >
  )
};