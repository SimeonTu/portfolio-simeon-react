import { useState, useEffect } from 'react';
import useResponsive from '../../hooks/useResponsive';

function ScrollIndicator() {
  const [isHidden, setIsHidden] = useState(false);
  const { isMobile } = useResponsive();

  useEffect(() => {
    const mainContent = document.querySelector('.main-content-wrapper');

    // Match legacy behavior from `js/scroll-indicator.js`
    if (isMobile) {
      const timeout = setTimeout(() => {
        setIsHidden(true);
      }, 2000);
      return () => clearTimeout(timeout);
    }

    const handleScroll = () => {
      const scrollAmount = mainContent ? mainContent.scrollTop : window.scrollY;
      setIsHidden(scrollAmount > 10);
    };

    handleScroll();
    if (mainContent) {
      mainContent.addEventListener('scroll', handleScroll);
      return () => mainContent.removeEventListener('scroll', handleScroll);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  return (
    <div className={`scroll-indicator${isHidden ? ' hidden' : ''}`}>
      <div className="vertical-text">MORE BELOW</div>
      <div className="arrow">↓</div>
    </div>
  );
}

export default ScrollIndicator;
