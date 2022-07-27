import React from 'react';
import './style.css';

import EstruturaSecao from '../EstruturaSecao';
import Botao from '../../components/Botao';
import { Link } from 'react-router-dom';


export default function SecaoImagens() {
  return (
    <section id='SecaoImagens' className='SecaoImagens flex'>
      <EstruturaSecao titulo='IMAGENS'>
        <div className="imagens flex-row centralizar">
          <img src="https://img.freepik.com/fotos-gratis/design-de-interiores-de-cozinha-com-moveis-de-madeira_23-2148848699.jpg?w=826&t=st=1658846163~exp=1658846763~hmac=95ad33bb001278066c4af5691116fd9c0b593861fa7b44c3d3bbbbd93277fa29" alt="" />
          <img src="https://img.freepik.com/fotos-premium/cozinha-de-design-moderno-com-luz-ambiental_23-2148291583.jpg?w=826" alt="" />
          <img src="https://img.freepik.com/fotos-gratis/moveis-de-madeira-cozinha-design-de-interiores_23-2148848662.jpg?t=st=1658846212~exp=1658846812~hmac=1e3cf4512a3bc8e21bfddb4234d0ef8d1de3fe2d533a1b7cb1590114b9b1a879&w=826" alt="" />
          <img className='someCelular' src="https://img.freepik.com/fotos-gratis/interior-de-movel-de-madeira_23-2148848665.jpg?w=900" alt="" />
          <img className='someCelular' src="https://img.freepik.com/fotos-gratis/design-de-interiores-de-sala-de-estar-com-estante_23-2148848678.jpg?w=826" alt="" />
          <img className='someCelular' src="https://img.freepik.com/fotos-premium/3d-que-rende-a-madeira-escandinava-minima-andam-no-armario-com-vestuario_105762-844.jpg?w=740" alt="" />
        </div>
        <Botao>
          <Link to='/portfolio'>Ver mais</Link>
        </Botao>
      </EstruturaSecao>
    </section>
  );
}