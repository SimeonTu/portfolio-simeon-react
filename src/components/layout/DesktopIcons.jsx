import SecretFolder from '../easter-eggs/SecretFolder';

function DesktopIcons() {
  return (
    <div className="desktop-icons">
      <div className="desktop">
        <a className="icons" href="https://github.com/SimeonTu" target="_blank" rel="noopener noreferrer">
          <img src="/img/icons/githubWhiteBg.png" alt="Link to my Github" />
          <span>Github</span>
        </a>
      </div>
      <div className="desktop">
        <a className="icons" href="https://www.linkedin.com/in/simeon-tudzharov/" target="_blank" rel="noopener noreferrer">
          <img src="/img/icons/linkedin.png" alt="Link to my Linkedin" />
          <span>Linkedin</span>
        </a>
      </div>
      <SecretFolder />
    </div>
  );
}

export default DesktopIcons;
