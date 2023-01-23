import React from 'react';
import styles from '../styles/general.module.css';
import star from '../public/star.svg';

interface Interface {
  top: number;
  right: number;
  width: number;
  luminous?: boolean;
}

const Stars: React.FC<Interface> = ({ top, right, width, luminous }) => {
  return (
    <img
      src={star.src}
      alt="star"
      className={styles.star + ' ' + (luminous && styles.star_luminous)}
      style={{ top: `${top}px`, right: `${right}px`, width: `${width}px` }}
    ></img>
  );
};

export default Stars;
