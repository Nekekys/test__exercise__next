import React, { useState } from 'react';
import styles from '../styles/general.module.css';

interface Interface {
  children: string;
}

const P1: React.FC<Interface> = ({ children }) => {
  return <p className={styles.P1}>{children}</p>;
};

export default P1;
