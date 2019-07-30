import Head from 'next/head';
import '../static/main.css';
import { useState } from 'react';
import { useRouter } from 'next/router';

const STEP_IMAGES = [
  'empty',
  '/static/step1.jpg',
  '/static/step2.jpg',
  '/static/step3.jpg',
  '/static/step4.jpg',
  '/static/step5.jpg',
];

function Home() {
  const [counter, setCounter] = useState(0);
  const router = useRouter();
  const { language } = router.query;

  function handleCounterHover(selectedCounter) {
    setCounter(selectedCounter);
  }

  return (
    <>
      <Head>
        <title>Home page</title>
        <link href="https://fonts.googleapis.com/css?family=Oswald&display=swap&subset=cyrillic" rel="stylesheet" />
      </Head>
      <div className="content">
        <div className="languageSelector">
          <a href="?language=ru" className={`languageSelector__link languageSelector__link_active_${language === 'ru'}`}>РУС</a>
          <a href="?language=en" className={`languageSelector__link languageSelector__link_active_${language === 'en'}`}>ENG</a>
        </div>
        {STEP_IMAGES.map((imageUrl, index) => (imageUrl === 'empty' ? (
          <div className="intro__title">
            We start from scratch
            <div className="intro__subTitle">
              Move your mouse over squares to see all stages. (or use left/right keys)
            </div>
          </div>
        ) : (
          <img
            key={imageUrl}
            className={`stepImage stepImage_visible_${index <= counter}`}
            alt={`step-${index}`}
            src={imageUrl}
          />
        )))}
      </div>
      <div className="footer">
        <div className="counter">{counter}</div>
        <img className="logo" src="/static/logo.svg" alt="Dorproject" />
        <div className="counter__links">
          {STEP_IMAGES.map((imageUrl, index) => (
            <div
              key={imageUrl}
              className={`counter__link counter__link_active_${index === counter}`}
              onMouseEnter={() => handleCounterHover(index)}
            />
          ))}
        </div>
        <div className="navigation">
          <a className="navigation__link" href="/about">About us</a>
          <a className="navigation__link" href="/news">News</a>
          <a className="navigation__link" href="/services">Services</a>
          <a className="navigation__link" href="/projects">Projects</a>
          <a className="navigation__link" href="/career">Career</a>
          <a className="navigation__link" href="/contacts">Contacts</a>
        </div>
      </div>
    </>
  );
}

export default Home;
