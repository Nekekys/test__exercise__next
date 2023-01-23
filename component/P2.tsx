import React, { useState } from 'react';
import styles from '../styles/general.module.css';

interface Interface {
  children: string;
}

const P2: React.FC<Interface> = ({ children }) => {
  return <p className={styles.P2}>{children}</p>;
};

export default P2;
