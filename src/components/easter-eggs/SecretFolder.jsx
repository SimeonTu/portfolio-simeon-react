import { useState } from 'react';
import { useEasterEgg } from '../../context/EasterEggContext';
import useAudio from '../../hooks/useAudio';

function SecretFolder() {
  const [isOpen, setIsOpen] = useState(false);
  const { findEgg } = useEasterEgg();
  const { play: playClick } = useAudio('/sounds/click.mp3', 0.1);
  const { play: playScore } = useAudio('/sounds/coin.mp3', 0.5);

  const handleFolderClick = () => {
    playClick();
    setIsOpen(true);
  };

  const handleEggClick = (e) => {
    e.stopPropagation();
    playClick();
    const found = findEgg('secretFolder');
    if (found) {
      playScore();
    }
  };

  const handleClose = () => {
    playClick();
    setIsOpen(false);
  };

  return (
    <>
      <div className="desktop">
        <div id="secret-folder" className="icons" onClick={handleFolderClick}>
          <img src="/img/icons/folder.png" alt="Do NOT open!!!!" />
          <span>Top Secret</span>
        </div>
      </div>

      {isOpen && (
        <div
          className="folder-window"
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1000,
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
          }}
        >
          <img src="/img/opened-folder-egg-1-5x.png" alt="Opened folder" />
          <div
            className="folder-egg-trigger"
            onClick={handleEggClick}
            style={{
              position: 'absolute',
              bottom: '150px',
              right: '118px',
              width: '110px',
              height: '90px',
              cursor: 'pointer',
            }}
          />
          <div
            className="folder-close-trigger"
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: '9px',
              right: '11px',
              width: '22px',
              height: '22px',
              cursor: 'pointer',
            }}
          />
        </div>
      )}
    </>
  );
}

export default SecretFolder;
