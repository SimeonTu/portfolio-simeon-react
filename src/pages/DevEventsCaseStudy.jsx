import { Link } from 'react-router-dom';
import TextWobble from '../components/effects/TextWobble';
import styles from './CaseStudy.module.css';

function DevEventsCaseStudy() {
  return (
    <>
      <Link to="/work" className={styles.backButton}>← Back to Projects</Link>

      <div className={styles.studyHeader}>
        <img src="/img/globe.gif" alt="Globe" className={styles.headerImg} />
        <TextWobble className={styles.studyTitle}>Dev Events</TextWobble>
        <p className={styles.subtitle}>Case Study</p>
      </div>

      <div className={styles.studyContent}>
        <h2>Overview</h2>
        <p>
          A serverless Progressive Web App (PWA) built with React that displays upcoming developer meetup events.
          Features offline functionality, data visualization, and OAuth authentication.
        </p>

        <h2>Challenge</h2>
        <p>
          Build a performant, offline-capable application that integrates with the Google Calendar API
          and provides interactive data visualizations.
        </p>

        <h2>Solution</h2>
        <p>
          Implemented a serverless architecture using AWS Lambda, integrated OAuth 2.0 authentication,
          and built interactive charts with Recharts. Added PWA features for offline use and installability.
        </p>

        <h2>Technologies</h2>
        <div className={styles.techLogos}>
          <img src="/img/logos/react.png" alt="React" />
          <img src="/img/logos/aws.png" alt="AWS" />
          <img src="/img/logos/js.png" alt="JavaScript" />
        </div>

        <div className={styles.links}>
          <a href="https://github.com/SimeonTu/meet" target="_blank" rel="noopener noreferrer" className="hvr-pulse-grow">
            View on GitHub
          </a>
          <a href="https://simeontu.github.io/meet/" target="_blank" rel="noopener noreferrer" className="hvr-pulse-grow">
            View Live Site
          </a>
        </div>
      </div>
    </>
  );
}

export default DevEventsCaseStudy;
