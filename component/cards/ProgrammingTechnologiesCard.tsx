import React from 'react';
import styles from '../../styles/cards.module.css';

interface Interface {
  name: string;
  src: string;
}

const ProgrammingTechnologiesCard: React.FC<Interface> = ({ name, src }) => {
  return (
    <div className={styles.cardPT}>
      <div className={styles.cardPT__img}>
        <img src={src} alt="img" />
      </div>
      <h4>{name}</h4>
    </div>
  );
};

export default ProgrammingTechnologiesCard;
