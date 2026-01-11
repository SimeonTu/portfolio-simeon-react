import { useState } from 'react';
import { useEasterEgg } from '../../context/EasterEggContext';
import useAudio from '../../hooks/useAudio';

function StartMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { findEgg } = useEasterEgg();
  const { play: playClick } = useAudio('/sounds/click.mp3', 0.1);
  const { play: playScore } = useAudio('/sounds/coin.mp3', 0.5);

  const handleStartClick = () => {
    playClick();
    setIsOpen(!isOpen);
  };

  const handleEggClick = () => {
    playClick();
    const found = findEgg('startMenu');
    if (found) {
      playScore();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="start-menu-egg"
          style={{
            // Legacy CSS sets `.start-menu-egg { display: none; }` and JS flips it to `block`.
            // Keep everything else driven by the legacy CSS for pixel-identical behavior.
            display: 'block',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
          }}
        >
          <img
            src="/img/win95-start-menu-egg.png"
            alt=""
            // In the original JS, the image itself also has the `start-menu-egg` class.
            // This is what makes the final rendered size match the original site.
            className="start-menu-egg"
            style={{ display: 'block', height: 'auto' }}
          />
          <div
            className="start-menu-egg-trigger"
            onClick={handleEggClick}
            style={{
              position: 'absolute',
              bottom: '49px',
              right: '-42px',
              width: '161px',
              height: '40px',
              cursor: 'pointer',
              zIndex: 20,
            }}
          />
        </div>
      )}
      <div
        id="start"
        className="start-rest"
        style={{ cursor: 'pointer' }}
        onClick={handleStartClick}
      >
        <img src="/img/win95icon.png" width="17px" height="15px" style={{ marginRight: '4px' }} alt="" />
        Start
      </div>
    </>
  );
}

export default StartMenu;
