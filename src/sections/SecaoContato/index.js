import React from 'react';
import './style.css';


export default function SecaoContato() {
  return (
    <section id='SecaoContato' className='SecaoContato flex centralizar '>
      <div className="contato-div limitar-div flex centralizar">
        <form name="meu-form" className='flex contato-box centralizar'>

          <h1>ENTRE EM CONTATO</h1>
          <div className="nome-email flex-row">
            <input type="text" id="nomeid" placeholder="Seu Nome" required="required" name="nome" />

            <input type="email" id="emailid" placeholder="Email" required="required" name="email" />
          </div>


          <textarea placeholder="Mensagem" required="required"></textarea>

          <input type="submit" className="enviar" onclick="Enviar();" value="Enviar" />
        </form>

      </div>
    </section>
  );
}