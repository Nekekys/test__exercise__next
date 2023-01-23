import React from 'react';
import styles from '../../styles/cards.module.css';
import P2 from '../P2';
import arrow from '../../public/arrowStep.svg';

interface Interface {
  number: string;
  title: string;
  text: string;
  left?: boolean;
}

const StepsCard: React.FC<Interface> = ({ number, title, text, left = false }) => {
  return (
    <div className={styles.cardSteps + ' ' + (left ? styles.cardSteps__left : styles.cardSteps__right)}>
      <div className={styles.cardSteps__arrow__group}>
        <img src={arrow.src} alt="arrow" />
        <span className={styles.cardSteps__arrow__group_circle}></span>
      </div>
      <div className={styles.cardSteps__main}>
        <h4>{number}</h4>
        <h3>{title}</h3>
        <P2>{text}</P2>
      </div>
    </div>
  );
};

export default StepsCard;
