import React from 'react';
import styles from '../../styles/Footer.module.css';
import logo from '../../public/logoWebtronics.svg';
import P1 from '../P1';
import facebook from '../../public/facebook.svg';
import fox from '../../public/fox.svg';
import twitter from '../../public/twitter.svg';
import linkedin from '../../public/linkedin.svg';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__logo__container}>
          <img src={logo.src} alt="logo" />
          <P1>Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815</P1>
        </div>
        <div className={styles.footer__nav__container}>
          <span>Company</span>
          <div className={styles.footer__nav__row}>
            <div>
              <a href="#About">About Us</a>
              <a href="#Steps">Steps</a>
              <a href="#Questions">FAQs</a>
            </div>
            <div>
              <a href="#Review">Review</a>
              <a href="#Gallery">Gallery</a>
            </div>
          </div>
        </div>
        <div className={styles.footer__social__media__container}>
          <span>Social media</span>
          <div>
            <a href="/">
              <img src={facebook.src} alt="facebook" />
            </a>
            <a href="/">
              <img src={fox.src} alt="fox" />
            </a>
            <a href="/">
              <img src={twitter.src} alt="twitter" />
            </a>
            <a href="/">
              <img src={linkedin.src} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
