import React from 'react';
import styles from '../../styles/accordion.module.css';
import P1 from '../P1';

interface Interface {
  title: string;
  text: string;
  id: number;
  active?: boolean;
  clickHandler: (id: number) => void;
}

const AccordionElement: React.FC<Interface> = ({ title, text, id, active = false, clickHandler }) => {
  return (
    <div onClick={() => clickHandler(id)} className={styles.accordionElement + ' ' + (active && styles.active)}>
      <div className={styles.accordionElement__show}>
        <div className={styles.accordionElement__show_container}>
          <span className={styles.accordionElement__show_line_1}></span>
          <span className={styles.accordionElement__show_line_2}></span>
        </div>
      </div>
      <h4>{title}</h4>
      <P1>{text}</P1>
    </div>
  );
};

export default AccordionElement;
