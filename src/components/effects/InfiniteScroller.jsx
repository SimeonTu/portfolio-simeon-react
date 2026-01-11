import { useEffect, useRef } from 'react';

function InfiniteScroller({ children, speed = 'medium', direction = 'left', innerClassName = '' }) {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const scroller = scrollerRef.current;
    if (!scroller) return;

    // React dev/StrictMode can run effects twice, which would clone items twice and effectively
    // double the scroll distance while keeping the same duration (making it feel faster than the original).
    if (scroller.getAttribute('data-cloned') === 'true') return;

    scroller.setAttribute('data-animated', 'true');

    const scrollerInner = scroller.querySelector('.scroller__inner');
    if (!scrollerInner) return;
    const scrollerContent = Array.from(scrollerInner.children);

    // Clone items for infinite scroll
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute('aria-hidden', 'true');
      scrollerInner.appendChild(duplicatedItem);
    });

    scroller.setAttribute('data-cloned', 'true');
  }, []);

  return (
    <div
      ref={scrollerRef}
      className="scroller"
      data-direction={direction}
      data-speed={speed}
    >
      <ul className={`scroller__inner ${innerClassName}`.trim()}>
        {children}
      </ul>
    </div>
  );
}

export default InfiniteScroller;
