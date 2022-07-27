import React from 'react';

import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

export default function Wpp() {

  return (
    <WhatsAppWidget
      phoneNumber="5548998261085"
      companyName='HANDS'
      message='Olá! 👋🏼 O que eu posso fazer por você?'
      sendButtonText='Enviar'
      inputPlaceHolder='Digite uma mensagem'
      replyTimeText='Vamos lhe responder o mais rápido possível'
    />
  );
}
