import React from "react";
import ModalImage from "react-modal-image";
import { colecaoImagens } from '../../lib/colecaoImagens'

export default function ConjuntoImagem(props) {
  return (
    <>
      {colecaoImagens.map((img) => {
        return (
          <ModalImage
            className={props.className}
            small={img.src}
            large={img.src}
            alt={img.text}
            hideDownload={true}
            showRotate={false}
          />)
      })
      }
    </>
  )
}