import React from 'react';
import styles from '../styles/general.module.css';

const BlurCircles = () => {
  return (
    <>
      <div className={styles.blur_circles_left} style={{ top: '250px' }}></div>
      <div className={styles.blur_circles_left} style={{ top: '1580px' }}></div>
      <div className={styles.blur_circles_left} style={{ top: '4250px' }}></div>
      <div className={styles.blur_circles_left} style={{ top: '5750px' }}></div>

      <div className={styles.blur_circles_right} style={{ top: '180px' }}></div>
      <div className={styles.blur_circles_right} style={{ top: '1100px' }}></div>
      <div className={styles.blur_circles_right} style={{ top: '3500px' }}></div>
      <div className={styles.blur_circles_right} style={{ top: '4700px' }}></div>
      <div className={styles.blur_circles_right} style={{ top: '6050px' }}></div>
    </>
  );
};

export default BlurCircles;
