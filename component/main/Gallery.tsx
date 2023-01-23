import React from 'react';
import styles from '../../styles/Gallery.module.css';
import P1 from '../P1';
import img1 from '../../public/gallery1.png';
import img2 from '../../public/gallery2.png';
import img3 from '../../public/gallery3.png';
import img4 from '../../public/gallery4.png';
import Anchor from '../Anchor';
import Stars from '../Stars';

const starArray = [
  { top: 650, right: 280, width: 25 },
  { top: 810, right: 460, width: 15 },
  { top: 900, right: 1020, width: 15 }
];

function Gallery() {
  return (
    <div className={styles.gallery}>
      {starArray.map((e) => (
        <Stars {...e} />
      ))}
      <Anchor name="Gallery" />
      <h2>Gallery</h2>
      <div className={styles.gallery__container}>
        <div className={styles.gallery__container_left}>
          <P1>
            By the end of this course, you will be able to develop and publish your very own Google Chrome extension! In
            this course we will focus on coding exercises and projects.
          </P1>
          <img src={img1.src} alt="dev1" />
        </div>
        <div className={styles.gallery__container_right}>
          <div className={styles.gallery__container_images}>
            <div className={styles.gallery__container_images_left}>
              <img src={img2.src} alt="dev2" />
            </div>
            <div className={styles.gallery__container_images_right}>
              <img src={img3.src} alt="dev3" />
              <img style={{ marginTop: '20px' }} src={img4.src} alt="dev4" />
            </div>
          </div>
          <div className={styles.gallery__container_right_bottom}>
            <P1>
              If you would like to learn web development and get a job in the tech industry, you are going to LOVE this
              course! Learn HTML, CSS, JavaScript, Bootstrap and more with over 15 hours of HD video tutorials! This
              course was designed to be extremely beginner friendly. We will begin with the very basics of HTML and
              build a simple web page.
            </P1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
