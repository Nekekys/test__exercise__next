import React, { useState } from 'react';
import styles from '../../styles/carousel.module.css';

interface Interface {
  src: string;
  active?: boolean;
}

const CarouselElem: React.FC<Interface> = ({ src, active }) => {
  return (
    <div className={styles.carouselElem + ' ' + (active && styles.carouselElemActive)}>
      <img src={src} alt="img" />
    </div>
  );
};

export default CarouselElem;
