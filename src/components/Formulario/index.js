import React from 'react';
import './styles.scss';


export default function Formulario(props) {
  return (
    <form id='Formulario' name="meu-form" className='flex contato-box centralizar'>

      <h1>{'formulário'.toUpperCase()}</h1>
      <div className="nome-email flex-row">
        <input type="text" id="nomeid" placeholder="Seu Nome" required="required" name="nome" />

        <input type="email" id="emailid" placeholder="Email" required="required" name="email" />
      </div>


      <textarea placeholder="Mensagem" required="required"></textarea>

      <input type="submit" className="enviar" onclick="Enviar();" value="Enviar" />
    </form>
  );
}