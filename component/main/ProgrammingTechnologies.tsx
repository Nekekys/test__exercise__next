import React from 'react';
import P1 from '../P1';
import styles from '../../styles/ProgrammingTechnologies.module.css';
import angularIcon from '../../public/angular.png';
import reactIcon from '../../public/react.png';
import vueIcon from '../../public/vue.png';
import jsIcon from '../../public/js.png';
import ProgrammingTechnologiesCard from '../cards/ProgrammingTechnologiesCard';
import Anchor from '../Anchor';

function ProgrammingTechnologies() {
  return (
    <div className={styles.PrTech}>
      <Anchor name="Programs" />
      <h2>Programming Technologies</h2>
      <P1>By the end, you’ll have the portfolio and interview skills you need to start your new career.</P1>
      <div className={styles.PrTech__cards}>
        <ProgrammingTechnologiesCard src={angularIcon.src} name="Angular" />
        <ProgrammingTechnologiesCard src={reactIcon.src} name="React" />
        <ProgrammingTechnologiesCard src={vueIcon.src} name="Vue.js" />
        <ProgrammingTechnologiesCard src={jsIcon.src} name="JavaScript" />
      </div>
    </div>
  );
}

export default ProgrammingTechnologies;
