import React, { useState } from 'react';
import styles from '../../styles/accordion.module.css';
import AccordionElement from './AccordionElement';

const accordionArray = [
  {
    id: 1,
    title: 'What is the price?',
    text: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'
  },
  {
    id: 2,
    title: 'What is the price?',
    text: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'
  },
  {
    id: 3,
    title: 'What is the price?',
    text: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'
  },
  {
    id: 4,
    title: 'What is the price?',
    text: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'
  },
  {
    id: 5,
    title: 'What is the price?',
    text: 'Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.'
  }
];

const Accordion = () => {
  const [activeID, setActiveID] = useState<number>(1);
  const clickHandler = (id: number) => {
    setActiveID(id);
  };

  return (
    <div className={styles.accordion}>
      {accordionArray.map((obj) => {
        if (obj.id === activeID) {
          return (
            <AccordionElement
              key={obj.id}
              id={obj.id}
              title={obj.title}
              text={obj.text}
              clickHandler={clickHandler}
              active
            />
          );
        }
        return (
          <AccordionElement key={obj.id} id={obj.id} title={obj.title} text={obj.text} clickHandler={clickHandler} />
        );
      })}
    </div>
  );
};

export default Accordion;
