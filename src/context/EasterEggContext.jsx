import { createContext, useContext, useState, useEffect } from 'react';

const EasterEggContext = createContext();

export function EasterEggProvider({ children }) {
  // Initialize state from localStorage
  const [eggCount, setEggCount] = useState(() =>
    parseInt(localStorage.getItem('eggCount')) || 0
  );

  const [foundEggs, setFoundEggs] = useState(() => ({
    draggable: localStorage.getItem('eggFound') === 'true',
    startMenu: localStorage.getItem('startEggFound') === 'true',
    secretFolder: localStorage.getItem('secretEggFound') === 'true',
    scroller: localStorage.getItem('scrollerEggFound') === 'true',
  }));

  const [celebrationPlayed, setCelebrationPlayed] = useState(() =>
    localStorage.getItem('celebrationPlayed') === 'true'
  );

  // Calculate maxEggs based on screen width
  const getMaxEggs = () => {
    const width = window.innerWidth;
    if (width <= 633) return 1;
    if (width <= 1030) return 2;
    if (width <= 1550) return 3;
    return 4;
  };

  const [maxEggs, setMaxEggs] = useState(getMaxEggs);

  // Update maxEggs on window resize
  useEffect(() => {
    const handleResize = () => {
      setMaxEggs(getMaxEggs());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Persist to localStorage on changes
  useEffect(() => {
    localStorage.setItem('eggCount', eggCount.toString());
    localStorage.setItem('celebrationPlayed', celebrationPlayed.toString());
  }, [eggCount, celebrationPlayed]);

  useEffect(() => {
    localStorage.setItem('eggFound', foundEggs.draggable.toString());
    localStorage.setItem('startEggFound', foundEggs.startMenu.toString());
    localStorage.setItem('secretEggFound', foundEggs.secretFolder.toString());
    localStorage.setItem('scrollerEggFound', foundEggs.scroller.toString());
  }, [foundEggs]);

  const findEgg = (eggName) => {
    if (!foundEggs[eggName]) {
      setFoundEggs(prev => ({ ...prev, [eggName]: true }));
      setEggCount(prev => prev + 1);
      return true; // New egg found
    }
    return false; // Already found
  };

  const resetProgress = () => {
    // Clear localStorage
    localStorage.removeItem('eggFound');
    localStorage.removeItem('startEggFound');
    localStorage.removeItem('secretEggFound');
    localStorage.removeItem('scrollerEggFound');
    localStorage.removeItem('eggCount');
    localStorage.removeItem('celebrationPlayed');

    // Reset state
    setEggCount(0);
    setFoundEggs({
      draggable: false,
      startMenu: false,
      secretFolder: false,
      scroller: false,
    });
    setCelebrationPlayed(false);
  };

  return (
    <EasterEggContext.Provider value={{
      eggCount,
      foundEggs,
      maxEggs,
      findEgg,
      resetProgress,
      celebrationPlayed,
      setCelebrationPlayed,
    }}>
      {children}
    </EasterEggContext.Provider>
  );
}

export const useEasterEgg = () => {
  const context = useContext(EasterEggContext);
  if (!context) {
    throw new Error('useEasterEgg must be used within an EasterEggProvider');
  }
  return context;
};
