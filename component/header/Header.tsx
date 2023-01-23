import React from 'react';
import styles from '../../styles/Header.module.css';
import logo from '../../public/logoWebtronics.svg';

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.header__row}>
        <div className={styles.header__row_logo}>
          <img src={logo.src} alt="logo" />
        </div>
        <nav className={styles.header__row_list}>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Programs">Programs</a>
          </li>
          <li>
            <a href="#Steps">Steps</a>
          </li>
          <li>
            <a href="#Questions">Questions</a>
          </li>
          <li>
            <a href="#GetInTouch">Get in touch</a>
          </li>
        </nav>
      </div>
    </header>
  );
}

export default Header;
