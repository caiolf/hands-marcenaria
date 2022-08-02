import React from 'react';
import './style.css';
import cx from 'classnames'

export default function Botao(props) {
  return (
    <div class={cx('Botao', { props })}>
      <span>{props.children}</span>
      <svg viewBox="0 0 13 10" height="10px" width="15px">
        <path d="M1,5 L11,5"></path>
        <polyline points="8 1 12 5 8 9"></polyline>
      </svg>
    </div>
  );
}