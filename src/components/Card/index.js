import React from 'react';
import './style.css';

export default function Card(props) {
  return (
    <div id='Card' className='Card flex'>
      <div className="blackBorder">
        <div className="redBorder">
          <img src={props.img} alt={props.imgAlt} />
        </div>
      </div>
      <div className="cardLabel">
        <p>{props.label}</p>
      </div>
    </div>
  );
}