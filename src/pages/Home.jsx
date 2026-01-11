import { Link } from 'react-router-dom';
import TextWobble from '../components/effects/TextWobble';
import styles from './Home.module.css';

function Home() {
  return (
    <>
      <div className={styles.logoDiv}>
        <img className={styles.logoCat} src="/img/artemis.gif" alt="decorative kitty" />
        <div className={styles.logoText}>
          <span>Simeon Tudzharov</span>
        </div>
        <img className={styles.logoCat} src="/img/artemis.gif" alt="decorative kitty" style={{ transform: 'scaleX(-1)' }} />
      </div>

      <div>
        <img className={styles.centerImage} src="/img/photo.jpg" alt="Photo" height="150" />
        {/* Use legacy `.awesome` so the original color-shift animation matches 1:1 */}
        <TextWobble className="awesome">Hello World!</TextWobble>

        <p id="short-description" className={styles.shortDescription}>
          Hi, I'm a passionate <span>&lt;web&gt;</span> developer with a flair for design and technology,
          who brings a unique blend of creative expression nurtured through years of multimedia editing and coding for
          personal and professional projects.
        </p>

        <p id="long-description" className={styles.longDescription}>
          Hi, I'm a passionate <span>&lt;web&gt;</span> developer with a flair for design and technology,
          who brings a unique blend of creative expression nurtured through years of multimedia editing and coding for
          personal and professional projects. Propelled by a fascination for innovation, I aim to
          contribute to cutting-edge projects and driving positive change in the industry and the world.
        </p>

        <Link className="hvr-pulse-grow index-links" to="/work">Check out some of my projects</Link>
        <a className="hvr-pulse-grow index-links" target="_blank" rel="noopener noreferrer" href="/Simeon Tudzharov CV.pdf">
          Download my CV
        </a>
      </div>
    </>
  );
}

export default Home;
