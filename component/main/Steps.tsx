import React from 'react';
import styles from '../../styles/Steps.module.css';
import StepsCard from '../cards/StepsCard';
import Anchor from '../Anchor';
import Stars from '../Stars';

const starArray = [
  { top: 0, right: 910, width: 25 },
  { top: 440, right: 1130, width: 15 },
  { top: 450, right: -50, width: 25 },
  { top: 640, right: 350, width: 15 },
  { top: 900, right: 110, width: 15 }
];

function Steps() {
  return (
    <div className={styles.steps}>
      {starArray.map((e) => (
        <Stars {...e} />
      ))}
      <Anchor name="Steps" />
      <h2>Steps</h2>
      <div className={styles.steps__container}>
        <div className={styles.steps__left__column}>
          <StepsCard
            number="Step 1"
            title="Introduction to Front-End"
            text="Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis."
            left
          />
          <StepsCard
            number="Step 3"
            title="Introduction to Front-End"
            text="Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis."
            left
          />
          <StepsCard
            number="Step 5"
            title="Introduction to Front-End"
            text="Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis."
            left
          />
        </div>
        <div className={styles.steps__middle__column}></div>
        <div className={styles.steps__right__column}>
          <StepsCard
            number="Step 2"
            title="Introduction to Front-End"
            text="Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis."
          />
          <StepsCard
            number="Step 4"
            title="Introduction to Front-End"
            text="Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis."
          />
          <StepsCard
            number="Step 6"
            title="Introduction to Front-End"
            text="Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis."
          />
        </div>
      </div>
    </div>
  );
}

export default Steps;
