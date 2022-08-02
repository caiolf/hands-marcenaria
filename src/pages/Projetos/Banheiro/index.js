import React from 'react';

import EstruturaPagina from '../../../components/EstruturaPagina';
import EstruturaGaleria from '../../../components/EstruturaGaleria';

import { colecaoBanheiro } from '../../../lib/colecaoBanheiro';

export default function Banheiro() {

  return (
    <EstruturaPagina title='Banheiro | Projetos'>
      <EstruturaGaleria colecao={colecaoBanheiro} />
    </EstruturaPagina >
  )
};