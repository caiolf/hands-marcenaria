import React from 'react';

import EstruturaPagina from '../../../components/EstruturaPagina';
import EstruturaGaleria from '../../../components/EstruturaGaleria';

import { colecaoQuarto } from '../../../lib/colecaoQuarto';

export default function Quarto() {

  return (
    <EstruturaPagina title='Quarto | Projetos'>
      <EstruturaGaleria colecao={colecaoQuarto} />
    </EstruturaPagina >
  )
};