import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { EasterEggProvider } from '../../context/EasterEggContext';
import DesktopIcons from './DesktopIcons';
import Clouds from './Clouds';
import DraggableWindow from './DraggableWindow';
import Taskbar from './Taskbar';
import SizeWarning from './SizeWarning';
import Scoreboard from '../easter-eggs/Scoreboard';
import SecretEgg from '../easter-eggs/SecretEgg';
import PokemonCursor from '../effects/PokemonCursor';

function AppLayout() {
  const location = useLocation();

  // In a SPA, clicked <Link> elements can remain focused after navigation.
  // Our legacy CSS animates `.hvr-pulse-grow:focus`, so we blur on route change
  // to match the static site's behavior (full page load clears focus).
  useEffect(() => {
    const active = document.activeElement;
    if (active && active instanceof HTMLElement) {
      active.blur();
    }
  }, [location.pathname]);

  // On mobile, the legacy CSS applies case-study background images to `body` via ids.
  // On desktop, we apply backgrounds to the window via `.cookie-bg/.dev-events-bg/.ifdb-bg`.
  useEffect(() => {
    const path = location.pathname;
    let nextId = '';
    if (path.includes('/case-studies/cookie')) nextId = 'cookie-body';
    if (path.includes('/case-studies/dev-events')) nextId = 'dev-events-body';
    if (path.includes('/case-studies/ifdb')) nextId = 'ifdb-body';

    document.body.id = nextId;

    return () => {
      if (document.body.id === nextId) document.body.id = '';
    };
  }, [location.pathname]);

  // Determine taskbar text based on route
  const getTaskbarText = () => {
    if (location.pathname === '/') return 'Welcome';
    if (location.pathname === '/about') return 'About';
    if (location.pathname === '/work') return 'Projects';
    if (location.pathname === '/contact') return 'Contact';
    if (location.pathname.includes('/case-studies')) return 'Case Study';
    return 'Portfolio';
  };

  return (
    <EasterEggProvider>
      <PokemonCursor />
      <SecretEgg />
      <DesktopIcons />
      <Clouds />
      <DraggableWindow>
        <Outlet />
      </DraggableWindow>
      <Taskbar text={getTaskbarText()} />
      <SizeWarning />
      <Scoreboard />
    </EasterEggProvider>
  );
}

export default AppLayout;
