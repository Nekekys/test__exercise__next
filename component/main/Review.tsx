import React, { useEffect, useState } from 'react';
import styles from '../../styles/Review.module.css';
import P1 from '../P1';
import img1 from '../../public/carousel_img_1.jpg';
import img2 from '../../public/carousel_img_2.jpg';
import img3 from '../../public/carousel_img_3.jpg';
import Carousel from '../carousel/Carousel';
import Anchor from '../Anchor';
import Stars from '../Stars';

const starArray = [{ top: 300, right: -90, width: 25 }];

const carouselArray = [
  {
    id: 1,
    src: img1.src,
    title: 'Best courses ever',
    text: 'Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.'
  },
  {
    id: 2,
    src: img2.src,
    title: 'Amazing teaching',
    text: "The explanation is crazy it really doesn't have a structure to go from point A to point B. He starts to explain something then he change his mind and start with another thing an so on. If you try to learn pro active by doing the same thing with him all along you will get confused and start to loose interest."
  },
  {
    id: 3,
    src: img3.src,
    title: 'Simple and easy',
    text: 'I am really enjoying the experience of learning a new skill I used to believe that web design was way too complicated for me to learn but so far in this course I have been keeping up and having fun.'
  }
];

function Review() {
  const [currentElement, setCurrentElement] = useState<number>(1);
  const [arrayCarouselImg, setArrayCarouselImg] = useState<string[]>([]);

  useEffect(() => {
    let newArr = carouselArray.map((e) => e.src);
    let newElem = newArr.splice(currentElement - 1, 1)[0];
    newArr.unshift(newElem);
    setArrayCarouselImg(newArr);
  }, [currentElement]);

  const changeIdHandler = (plus: boolean) => {
    let id = currentElement;

    if (plus) {
      id += 1;
    } else {
      id -= 1;
    }

    if (id > carouselArray.length) {
      id = 1;
    }
    if (id < 1) {
      id = carouselArray.length;
    }
    setCurrentElement(id);
  };

  return (
    <div className={styles.review}>
      {starArray.map((e) => (
        <Stars {...e} />
      ))}
      <Anchor name="Review" />
      <h2>Review</h2>
      <div className={styles.review__container}>
        <div className={styles.review__left}>
          <h4>{carouselArray.filter((e) => e.id === currentElement)[0].title}</h4>
          <P1>{carouselArray.filter((e) => e.id === currentElement)[0].text}</P1>
        </div>
        <div className={styles.review__right}>
          <Carousel
            id={currentElement}
            srcArray={arrayCarouselImg}
            changeIdHandler={changeIdHandler}
            lengthArr={carouselArray.length}
          />
        </div>
      </div>
    </div>
  );
}

export default Review;
