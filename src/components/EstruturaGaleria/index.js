import React from 'react';
import './galeria.scss'
import { Link } from 'react-router-dom';
import ModalImage from "react-modal-image";

import BotaoVoltar from '../BotaoVoltar';
export default function EstruturaGaleria(props) {

  return (
    <div className="galeria flex centralizar">
      <div className='limitar-div flex area-btn'>
        <BotaoVoltar><Link to='/projetos'>Voltar</Link></BotaoVoltar>
      </div>

      <div className='galeria-div limitar-div flex-row wrap centralizar'>
        {props.colecao.map((img) => {
          return (
            <ModalImage
              className='imgs'
              small={img.src}
              large={img.src}
              alt={img.text}
              hideDownload={true}
              showRotate={false}
            />)
        })}
      </div>
    </div>
  )
};