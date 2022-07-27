
import React from 'react';
import styles from './index.module.css';

export default function ChatBallon(props) {
  return (
    <div className={styles.imessage}>
      <span className={styles.span}></span>
      <p className={styles['from-them']}>{props.children}</p>
    </div>
  )
}

