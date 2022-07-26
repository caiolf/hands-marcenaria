import React from 'react';
import './styles.css'

import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import { ReactComponent as CompanyIcon } from '../../logo.svg';

export default function Wpp() {

  return (
    <WhatsAppWidget
      CompanyIcon={CompanyIcon}
      phoneNumber="5548998261085"
      companyName='HANDS'
      message='Olá! 👋🏼 O que eu posso fazer por você?'
      sendButtonText='Enviar'
      inputPlaceHolder='Digite uma mensagem'
      replyTimeText='Vamos lhe responder o mais rápido possível'
    />
  );
}
