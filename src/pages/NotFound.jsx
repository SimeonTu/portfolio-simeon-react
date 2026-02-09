import { Link } from 'react-router-dom';
import TextWobble from '../components/effects/TextWobble';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <div className={styles.notFound}>
      <div className={styles.content}>
        <TextWobble className="awesome">404</TextWobble>
        <p className={styles.message}>
          This page wandered off into the tall grass. Let&apos;s get you back to the main path.
        </p>
        <div className={styles.actions}>
          <Link className="hvr-pulse-grow main-button" to="/">Go home</Link>
          <Link className="hvr-pulse-grow main-button" to="/work">View projects</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
