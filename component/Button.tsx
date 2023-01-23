import React, { useState } from 'react';
import styles from '../styles/general.module.css';

interface Interface {
  text: string;
  disabled: boolean;
}

const Button: React.FC<Interface> = ({ text, disabled }) => {
  return (
    <button className={styles.button + ' ' + (disabled ? styles.button_disabled : styles.button_active)}>{text}</button>
  );
};

export default Button;
