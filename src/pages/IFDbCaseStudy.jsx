import { Link } from 'react-router-dom';
import TextWobble from '../components/effects/TextWobble';
import styles from './CaseStudy.module.css';

function IFDbCaseStudy() {
  return (
    <>
      <Link to="/work" className={styles.backButton}>← Back to Projects</Link>

      <div className={styles.studyHeader}>
        <img src="/img/ifdb-logo2.png" alt="IFDb Logo" className={styles.headerImg} />
        <TextWobble className={styles.studyTitle}>IFDb</TextWobble>
        <p className={styles.subtitle}>Case Study</p>
      </div>

      <div className={styles.studyContent}>
        <h2>Overview</h2>
        <p>
          Internet Freelancers Database - A full-stack MEAN application for browsing and managing
          a database of freelancers. Features user authentication, CRUD operations, and a responsive UI.
        </p>

        <h2>Challenge</h2>
        <p>
          Build a complete full-stack application with user authentication, database management,
          and a polished Angular frontend.
        </p>

        <h2>Solution</h2>
        <p>
          Developed a RESTful API with Node.js and Express, implemented JWT authentication,
          and created an Angular frontend with TypeScript. Used MongoDB for data persistence
          and deployed with proper security measures.
        </p>

        <h2>Technologies</h2>
        <div className={styles.techLogos}>
          <img src="/img/logos/angular.png" alt="Angular" />
          <img src="/img/logos/nodejs.png" alt="Node.js" />
          <img src="/img/logos/mongodb.png" alt="MongoDB" />
          <img src="/img/logos/express.png" alt="Express" />
        </div>

        <div className={styles.links}>
          <a href="https://github.com/SimeonTu/IFDb-Angular-client" target="_blank" rel="noopener noreferrer" className="hvr-pulse-grow">
            View on GitHub
          </a>
          <a href="https://simeontu.github.io/IFDb-Angular-client/" target="_blank" rel="noopener noreferrer" className="hvr-pulse-grow">
            View Live Site
          </a>
        </div>
      </div>
    </>
  );
}

export default IFDbCaseStudy;
