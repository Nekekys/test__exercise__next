import React from 'react';
import styles from '../../styles/cards.module.css';
import P2 from '../P2';

interface Interface {
  description: string;
  name: string;
  src: string;
}

const MentorCard: React.FC<Interface> = ({ name, description, src }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img src={src} alt="img" />
      </div>
      <h4>{name}</h4>
      <P2>{description}</P2>
    </div>
  );
};

export default MentorCard;
