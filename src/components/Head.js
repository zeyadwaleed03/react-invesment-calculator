import React from 'react';
import styles from './Head.module.css';
function Head(props) {
  return (
    <header className={styles.header}>
      <img src={props.logo} alt="logo" />
      <h1>{props.title}</h1>
    </header>
  );
}

export default Head;
