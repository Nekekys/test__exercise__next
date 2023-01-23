import React from 'react';
import styles from '../../styles/ContactUs.module.css';
import P1 from '../P1';
import ContactUsForm from '../forms/ContactUsForm';
import Anchor from '../Anchor';

function ContactUs() {
  return (
    <div className={styles.contactUs}>
      <Anchor name="GetInTouch" />
      <h2>Contact us</h2>
      <P1>Do you have any kind of help please contact with us.</P1>
      <ContactUsForm />
    </div>
  );
}

export default ContactUs;
