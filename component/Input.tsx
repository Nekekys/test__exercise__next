import React, { useState } from 'react';
import styles from '../styles/general.module.css';

interface Interface {
  label: string;
  type: string;
  disabled?: boolean;
  error?: string;
  register?: {};
}

const Input: React.FC<Interface> = ({ label, disabled, type, error, register, ...props }) => {
  return (
    <div
      className={
        styles.input +
        ' ' +
        (disabled ? styles.input_disabled : styles.input_active) +
        ' ' +
        (error && styles.input_error)
      }
    >
      <input type={type} required {...register} {...props} />
      <span>{label}</span>
    </div>
  );
};

export default Input;
