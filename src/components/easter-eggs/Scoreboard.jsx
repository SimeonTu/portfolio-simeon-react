import { useEffect } from 'react';
import { useEasterEgg } from '../../context/EasterEggContext';
import useAudio from '../../hooks/useAudio';
import useConfetti from '../../hooks/useConfetti';

function Scoreboard() {
  const { eggCount, maxEggs, resetProgress, celebrationPlayed, setCelebrationPlayed } = useEasterEgg();
  const { play: playCelebration } = useAudio('/sounds/horn.mp3', 0.05);
  const { celebrate } = useConfetti();

  useEffect(() => {
    if (eggCount === maxEggs && eggCount > 0 && !celebrationPlayed) {
      playCelebration();
      setCelebrationPlayed(true);
      celebrate();
    }
  }, [eggCount, maxEggs, celebrationPlayed, playCelebration, celebrate, setCelebrationPlayed]);

  if (eggCount === 0) return null;

  return (
    <div className="scoreboard visible">
      <div>Easter Eggs Found: {eggCount}/{maxEggs}</div>
      {eggCount === maxEggs && (
        <button className="main-button" style={{ marginTop: '5px', height: 'auto' }} onClick={resetProgress}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Scoreboard;
