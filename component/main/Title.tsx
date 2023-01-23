import React from 'react';
import styles from '../../styles/Title.module.css';
import Button from '../Button';
import P1 from '../P1';

function Title() {
  return (
    <div className={styles.main__column}>
      <div className={styles.main__column_first_row}>
        <h1>Front-End </h1>
        <P1>
          Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive bootcamps teach
          (and more).
        </P1>
      </div>
      <div className={styles.main__column_second_row}>
        <Button text="Start my career change" disabled={false} />
        <h1>Developer</h1>
      </div>
      <div className={styles.main__column_third_row}>
        <h3>Courses</h3>
      </div>
    </div>
  );
}

export default Title;
