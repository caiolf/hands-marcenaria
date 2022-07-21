import React from 'react';
import './style.css';

export default function Celular(props) {
  return (
    <div className="phone">
      <div className="phone_mic"></div>
      <div className="phone_screen">
        {props.children}
      </div>
      <div className="phone_button"></div>
    </div>
  );
}