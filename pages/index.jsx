import Head from 'next/head';
import '../static/main.css';

const STEP_IMAGES = [
  '/static/step1.jpg',
  '/static/step2.jpg',
  '/static/step3.jpg',
  '/static/step4.jpg',
  '/static/step5.jpg',
];

function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
        <link href="https://fonts.googleapis.com/css?family=Oswald&display=swap&subset=cyrillic" rel="stylesheet" />
      </Head>
      <div className="content">
        {STEP_IMAGES.map((imageUrl, index) => (
          <img
            key={imageUrl}
            className="stepImage"
            alt={`step-${index}`}
            src={imageUrl}
          />
        ))}
      </div>
      <div className="footer">
        <div className="counter">0</div>
        <img className="logo" src="/static/logo.svg" alt="Dorproject" />
        <div className="counter__links">
          {STEP_IMAGES.map(imageUrl => (
            <div
              key={imageUrl}
              className="counter__link"
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
