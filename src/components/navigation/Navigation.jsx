import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  const isWork = location.pathname === '/work';

  return (
    <header>
      <div className="nav-wrapper" id={isWork ? 'nav-work-wrapper' : undefined}>
        <nav role="menubar" id={isWork ? 'nav-work' : undefined}>
          <Link className="hvr-pulse-grow" to="/" role="menuitem">Home</Link>
          <img src="/img/jewelx.gif" width="24" alt="" />
          <Link className="hvr-pulse-grow" to="/about" role="menuitem">About me</Link>
          <img src="/img/jewelx.gif" width="24" alt="" />
          <Link className="hvr-pulse-grow" to="/work" role="menuitem">Projects</Link>
          <img src="/img/jewelx.gif" width="24" alt="" />
          <Link className="hvr-pulse-grow" to="/contact" role="menuitem">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
