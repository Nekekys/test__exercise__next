import React, { useState } from 'react';
import styles from '../../styles/carousel.module.css';
import CarouselElem from './CarouselElem';
import arrowL from '../../public/CarouselArrow.png';
import arrowR from '../../public/CarouselArrowR.png';

interface Interface {
  id: number;
  srcArray: string[];
  lengthArr: number;
  changeIdHandler: (plus: boolean) => void;
}

const Carousel: React.FC<Interface> = ({ id, srcArray, changeIdHandler, lengthArr }) => {
  return (
    <div className={styles.carousel}>
      <div className={styles.carousel__control_panel}>
        <div className={styles.carousel__control_panel__count}>
          <span style={{ fontSize: '24px' }}>{id}/</span>
          <span style={{ verticalAlign: 'top', marginLeft: '8px' }}>{lengthArr}</span>
        </div>
        <div className={styles.carousel__control_panel__arrow}>
          <button className={styles.carousel__control_panel__arrow_left} onClick={() => changeIdHandler(false)}>
            <img src={arrowL.src} alt="left" />
          </button>
          <button className={styles.carousel__control_panel__arrow_right} onClick={() => changeIdHandler(true)}>
            <img src={arrowR.src} alt="right" />
          </button>
        </div>
      </div>
      <div className={styles.carousel__container}>
        {srcArray.map((elem, i) => {
          if (i == 0) {
            return <CarouselElem active key={i} src={elem} />;
          }
          return <CarouselElem key={i} src={elem} />;
        })}
      </div>
    </div>
  );
};

export default Carousel;
