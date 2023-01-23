import React from 'react';
import styles from '../../styles/AboutUs.module.css';
import line from '../../public/line.svg';
import MentorCard from '../cards/MentorCard';
import cardImage1 from '../../public/WadeWarren.png';
import cardImage2 from '../../public/KristinWatson.png';
import cardImage3 from '../../public/RobertFox.png';
import P1 from '../P1';
import Anchor from '../Anchor';
import Stars from '../Stars';

const starArray = [
  { top: 60, right: 910, width: 20 },
  { top: -30, right: 600, width: 20 },
  { top: 0, right: 300, width: 20 },
  { top: -50, right: -130, width: 40, luminous: true },
  { top: 570, right: 250, width: 15 },
  { top: 680, right: 160, width: 18 },
  { top: 750, right: -50, width: 25, luminous: true }
];

function AboutUs() {
  return (
    <div className={styles.aboutUs}>
      {starArray.map((e) => (
        <Stars {...e} />
      ))}
      <Anchor name="About" />
      <h2>About Us</h2>
      <div className={styles.aboutUs__container}>
        <div className={styles.aboutUs__mentors}>
          <h3>Mentors</h3>
          <div className={styles.aboutUs__mentors__line}>
            <img src={line.src} alt="line" />
          </div>
          <div className={styles.aboutUs__mentors__group}>
            <MentorCard
              name="Wade Warren"
              description="Front-end engineers work closely with designers"
              src={cardImage1.src}
            />
            <MentorCard
              name="Kristin Watson"
              description="Front-end engineers work closely with designers"
              src={cardImage2.src}
            />
            <MentorCard
              name="Robert Fox"
              description="Front-end engineers work closely with designers"
              src={cardImage3.src}
            />
          </div>
        </div>
        <div className={styles.aboutUs__text}>
          <P1>
            Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This
            Career Path will teach you not only the necessary languages and technologies, but how to think like a
            front-end engineer, too.
          </P1>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
