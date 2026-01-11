import useResponsive from '../../hooks/useResponsive';
import styles from './SizeWarning.module.css';

function SizeWarning() {
  const { isTooSmall } = useResponsive();

  if (!isTooSmall) return null;

  return (
    <div className={styles.sizeWarning}>
      <p>Your screen size is too small :&#40;</p>
    </div>
  );
}

export default SizeWarning;
