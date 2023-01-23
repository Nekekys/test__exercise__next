import React from 'react';
import styles from '../../styles/FAQ.module.css';
import P1 from '../P1';
import question from '../../public/question.png';
import Accordion from '../accordion/Accordion';
import Anchor from '../Anchor';
import Stars from '../Stars';

const starArray = [
  { top: 630, right: 1100, width: 25 },
  { top: 710, right: 350, width: 15 }
];

function FAQ() {
  return (
    <div className={styles.faq}>
      {starArray.map((e) => (
        <Stars {...e} />
      ))}
      <Anchor name="Questions" />
      <h2>Frequently Asked Questions</h2>
      <div className={styles.faq__container}>
        <div className={styles.faq__question}>
          <P1>Do you have any kind of questions? We are here to help.</P1>
          <img src={question.src} alt="question" />
        </div>
        <div className={styles.faq__accordion}>
          <Accordion />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
