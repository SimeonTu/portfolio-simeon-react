import { Link } from 'react-router-dom';
import TextWobble from '../components/effects/TextWobble';
import styles from './CaseStudy.module.css';

function CookieCaseStudy() {
  return (
    <>
      <Link to="/work" className={styles.backButton}>← Back to Projects</Link>

      <div className={styles.studyHeader}>
        <img src="/img/cookie-img.png" alt="Cookie" className={styles.headerImg} />
        <TextWobble className={styles.studyTitle}>Cookie Clicker</TextWobble>
        <p className={styles.subtitle}>Case Study</p>
      </div>

      <div className={styles.studyContent}>
        <h2>Overview</h2>
        <p>
          An incremental idle game where players click cookies to earn points and unlock upgrades.
          Built with vanilla JavaScript, HTML, and CSS to demonstrate fundamental web development skills.
        </p>

        <h2>Challenge</h2>
        <p>
          Create an engaging idle game with persistent state, complex game mechanics, and a retro aesthetic
          using only vanilla JavaScript without frameworks.
        </p>

        <h2>Solution</h2>
        <p>
          Implemented a comprehensive game loop with auto-clickers, upgrades, achievements, and localStorage
          for game state persistence. Designed a retro UI with custom animations and sound effects.
        </p>

        <h2>Technologies</h2>
        <div className={styles.techLogos}>
          <img src="/img/logos/html.png" alt="HTML" />
          <img src="/img/logos/css.png" alt="CSS" />
          <img src="/img/logos/js.png" alt="JavaScript" />
        </div>

        <div className={styles.links}>
          <a href="https://github.com/SimeonTu/cookie-clicker" target="_blank" rel="noopener noreferrer" className="hvr-pulse-grow">
            View on GitHub
          </a>
          <a href="https://simeontu.github.io/cookie-clicker/" target="_blank" rel="noopener noreferrer" className="hvr-pulse-grow">
            View Live Site
          </a>
        </div>
      </div>
    </>
  );
}

export default CookieCaseStudy;
