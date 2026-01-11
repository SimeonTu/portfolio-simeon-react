import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  // In the original static site, the Work page and all Case Study pages used
  // `#nav-work-wrapper` / `#nav-work` to control exact spacing/width.
  const isWorkOrCaseStudy =
    location.pathname === '/work' || location.pathname.startsWith('/case-studies');

  return (
    <header>
      <div className="nav-wrapper" id={isWorkOrCaseStudy ? 'nav-work-wrapper' : undefined}>
        <nav role="menubar" id={isWorkOrCaseStudy ? 'nav-work' : undefined}>
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
