import { useState, useEffect } from 'react';

function useResponsive() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    width: windowSize.width,
    height: windowSize.height,
    isMobile: windowSize.width <= 632,
    isTablet: windowSize.width > 632 && windowSize.width <= 850,
    isDesktop: windowSize.width > 850,
    isTooSmall: windowSize.width <= 325 || windowSize.height <= 330,
  };
}

export default useResponsive;
