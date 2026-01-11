import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useEasterEgg } from '../../context/EasterEggContext';
import useAudio from '../../hooks/useAudio';
import Navigation from '../navigation/Navigation';

function DraggableWindow({ children }) {
  const location = useLocation();
  const { findEgg, foundEggs } = useEasterEgg();
  const nodeRef = useRef(null);
  const handleRef = useRef(null);
  const checkInterval = useRef(null);
  const initialPosRef = useRef(null);
  const { play: playScore } = useAudio('/sounds/coin.mp3', 0.5);

  const isHomePage = location.pathname === '/';

  // 1:1 port of the legacy jQuery UI approach:
  // - drag the `.draggable` element via `.drag-handle`
  // - containment: "window"
  // - start: set transform to translate(0,0) to avoid transform-based offsets
  //
  // We keep our own initial centering on route changes, but dragging itself is imperative
  // (no React re-renders on mousemove), so it stays perfectly in sync with the pointer.
  const TASKBAR_HEIGHT_PX = 26; // `.taskbar { height: 26px; }`

  // Check egg position (only on home page)
  const checkEggPosition = useCallback(
    (pos) => {
    if (foundEggs.draggable || !isHomePage) return;

      const { x, y } = pos;
      const initial = initialPosRef.current;
      const dx = initial ? x - initial.x : x;
      // Original conditions: top >= 285 || left <= initialLeft - 265 || left >= initialLeft + 265
      if (y >= 285 || dx <= -265 || dx >= 265) {
        findEgg('draggable');
        playScore();
        if (checkInterval.current) {
          clearInterval(checkInterval.current);
        }
      }
    },
    [foundEggs.draggable, isHomePage, findEgg, playScore]
  );

  // Set initial position on mount and whenever the route changes.
  useLayoutEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const isMobileLayout =
      window.matchMedia('(max-width: 632px) and (min-height: 330px)').matches ||
      window.matchMedia('(min-width: 633px) and (max-height: 525px) and (min-height: 330px)').matches;

    // On mobile/landscape, the site uses a traditional document-scrolling layout.
    // The CSS media queries set `.browser-frame { position: relative; top: 0; left: 0; transform: none; ... }`.
    // We must NOT override that with inline styles (otherwise it appears centered and can't scroll properly).
    if (isMobileLayout) {
      node.style.left = '';
      node.style.top = '';
      node.style.transform = '';
      initialPosRef.current = { x: 0, y: 0 };
      return;
    }

    // Desktop: match the original static site initial placement, driven by the `.browser-frame` CSS:
    //   top: 30%; left: 50%; transform: translate(-50%, -30%)
    // Dragging clears transforms at start (handled in `onPointerDown`), mirroring the legacy behavior.
    node.style.left = '50%';
    node.style.top = '30%';
    node.style.transform = 'translate(-50%, -30%)';

    // Store the initial px position for the easter-egg checks.
    const rect = node.getBoundingClientRect();
    initialPosRef.current = { x: rect.left, y: rect.top };
  }, [location.pathname]);

  // Imperative drag logic (pointer events + pointer capture), matches jQuery UI feel.
  useEffect(() => {
    const node = nodeRef.current;
    const handle = handleRef.current;
    if (!node || !handle) return;

    let dragging = false;
    let pointerId = null;
    let startPointerX = 0;
    let startPointerY = 0;
    let startLeft = 0;
    let startTop = 0;
    let rafId = 0;
    let nextLeft = 0;
    let nextTop = 0;

    const getContainmentBounds = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const availableHeight = Math.max(0, vh - TASKBAR_HEIGHT_PX);
      const rect = node.getBoundingClientRect();
      return {
        minLeft: 0,
        minTop: 0,
        maxLeft: Math.max(0, vw - rect.width),
        maxTop: Math.max(0, availableHeight - rect.height),
      };
    };

    const applyPosition = () => {
      rafId = 0;
      node.style.left = `${nextLeft}px`;
      node.style.top = `${nextTop}px`;
    };

    const onPointerDown = (e) => {
      // Only primary button
      if (e.button !== 0) return;
      e.preventDefault();

      dragging = true;
      pointerId = e.pointerId;
      handle.setPointerCapture(pointerId);

      // Legacy behavior: clear transforms at start
      node.style.transform = 'translate(0,0)';

      const rect = node.getBoundingClientRect();
      startPointerX = e.clientX;
      startPointerY = e.clientY;

      // Use current rendered position as the drag origin
      startLeft = rect.left;
      startTop = rect.top;

      // Enable egg position check only during drag (like legacy interval-based approach)
      if (isHomePage && !foundEggs.draggable) {
        if (checkInterval.current) clearInterval(checkInterval.current);
        checkInterval.current = setInterval(() => {
          const currentLeft = parseFloat(node.style.left || '0') || 0;
          const currentTop = parseFloat(node.style.top || '0') || 0;
          checkEggPosition({ x: currentLeft, y: currentTop });
        }, 100);
      }
    };

    const onPointerMove = (e) => {
      if (!dragging) return;
      if (pointerId !== null && e.pointerId !== pointerId) return;

      const dx = e.clientX - startPointerX;
      const dy = e.clientY - startPointerY;

      const { minLeft, minTop, maxLeft, maxTop } = getContainmentBounds();
      const clampedLeft = Math.max(minLeft, Math.min(startLeft + dx, maxLeft));
      const clampedTop = Math.max(minTop, Math.min(startTop + dy, maxTop));

      nextLeft = Math.round(clampedLeft);
      nextTop = Math.round(clampedTop);

      if (!rafId) {
        rafId = window.requestAnimationFrame(applyPosition);
      }
    };

    const stopDragging = () => {
      if (!dragging) return;
      dragging = false;
      pointerId = null;
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
      if (checkInterval.current) {
        clearInterval(checkInterval.current);
        checkInterval.current = null;
      }
    };

    const onPointerUp = (e) => {
      if (pointerId !== null && e.pointerId !== pointerId) return;
      stopDragging();
    };

    const onPointerCancel = (e) => {
      if (pointerId !== null && e.pointerId !== pointerId) return;
      stopDragging();
    };

    handle.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove, { passive: false });
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerCancel);

    return () => {
      handle.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerCancel);
      if (checkInterval.current) {
        clearInterval(checkInterval.current);
        checkInterval.current = null;
      }
    };
  }, [location.pathname, isHomePage, foundEggs.draggable, checkEggPosition]);

  // Get container class based on route
  const getContainerClass = () => {
    const classes = ['container', 'browser-frame', 'draggable'];

    if (location.pathname === '/') {
      classes.push('container-index');
    } else if (location.pathname === '/about' || location.pathname === '/work') {
      classes.push('container-wide');
    } else if (location.pathname.includes('/case-studies/cookie')) {
      classes.push('container-study', 'cookie-bg');
    } else if (location.pathname.includes('/case-studies/dev-events')) {
      classes.push('container-study', 'dev-events-bg');
    } else if (location.pathname.includes('/case-studies/ifdb')) {
      classes.push('container-study', 'ifdb-bg');
    }

    return classes.join(' ');
  };

  return (
    <div ref={nodeRef} className={getContainerClass()}>
      <div ref={handleRef} className="drag-handle" />
      <main>
        <div className={`main-content-wrapper${location.pathname === '/about' ? ' main-about' : ''}`}>
          <Navigation />
          {children}
        </div>
      </main>
    </div>
  );
}

export default DraggableWindow;
