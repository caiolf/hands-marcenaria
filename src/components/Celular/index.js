
import React from 'react';
import styles from './index.module.css';

import ChatBallon from '../ChatBallon';

export default function Celular(props) {
  return (
    <div className={styles.phone}>
      <div className={styles.phone_mic}></div>
      <div className={styles.phone_screen}>
        <ChatBallon>{props.children}</ChatBallon>
      </div>
      <div className={styles.phone_button}></div>
    </div>
  );
}