import { Link } from 'react-router-dom';
import ScrollIndicator from '../components/effects/ScrollIndicator';

function Work() {
  // Styling/animations are driven by the legacy global CSS (`css/styles.css`).
  // Keep class names aligned with the static `work.html` so it looks identical.
  const projects = [
    {
      title: 'SnackDB',
      featured: true,
      image: '/img/snackdb.png',
      imageAlt: 'SnackDB home page',
      // Crop from the top (like the original featured project image treatment)
      imageStyle: { aspectRatio: '16 / 9', objectFit: 'cover', objectPosition: 'top center' },
      description:
        'A community-driven platform for discovering, rating, and reviewing snacks from around the world. Built with Next.js and TypeScript on top of Supabase (PostgreSQL + Auth + Storage), with barcode scanning and Open Food Facts integration for fast product lookup and auto-filled product details. Includes country-based discovery, detailed ratings, and a comment/review system in a mobile-responsive UI.',
      links: [{ type: 'live', href: 'https://snackdb.simeontu.com', label: 'Live site' }],
    },
    {
      title: 'EventfullSunday',
      image: '/img/eventfull.png',
      imageAlt: 'EventfullSunday home page',
      imageStyle: { aspectRatio: '16 / 9', objectFit: 'cover' },
      description:
        'A full-stack event management platform where I led frontend development using React and Redux. I implemented key features including Google services integration (Maps, Calendar, Analytics), user authentication with email verification, Redux state persistence, and a comprehensive ticket management system. The platform was built with a focus on mobile responsiveness and user experience, utilizing Tailwind CSS for styling and Node.js for backend integration.',
      links: [{ type: 'live', href: 'https://eventfullsunday.co.uk/', label: 'Live site' }],
    },
    {
      title: 'Cookie',
      image: '/img/cookie.png',
      caseStudy: '/case-studies/cookie',
      description:
        "Cookie is a project built using the Python-based Django framework that allows its users to view a list of recipes, upload their own recipes after registering, search and filter for recipes, and display different analytics about the filtered recipes.",
      links: [
        { type: 'github', href: 'https://github.com/SimeonTu/recipe-app', label: 'Github' },
        { type: 'live', href: 'https://cookie-recipe-app-72f47234c214.herokuapp.com/', label: 'Live site' },
      ],
    },
    {
      title: 'IFDb',
      image: '/img/ifdb-img-1.png',
      imageAlt: 'IFDb home page',
      caseStudy: '/case-studies/ifdb',
      description:
        'IFDb is a web app designed for movie enthusiasts who want to access and save information about their favorite films. It was built using a Node.js/MongoDB backend and has two different frontend versions - one built in React and another built in Angular.',
      links: [
        { type: 'github', href: 'https://github.com/SimeonTu/movie-app-client', label: 'Github (React)' },
        { type: 'github', href: 'https://github.com/SimeonTu/movie-app-client-angular', label: 'Github (Angular)' },
        { type: 'github', href: 'https://github.com/SimeonTu/movie-app', label: 'Github (Backend)' },
      ],
    },
    {
      title: 'Dev Events',
      image: '/img/dev-events.png',
      imageAlt: 'Dev Events Home Page',
      caseStudy: '/case-studies/dev-events',
      description:
        'Dev Events is a progressive web application (PWA) using a serverless architecture, built using using a test-driven development (TDD) approach. Discover upcoming events in the world of software and web develoment from all over the globe.',
      links: [
        { type: 'github', href: 'https://github.com/SimeonTu/meet-app', label: 'Github' },
        { type: 'live', href: 'https://simeontu.github.io/meet-app/', label: 'Live site' },
      ],
    },
    {
      title: 'Pokédex App',
      image: '/img/portfolio1.png',
      description:
        'A web application built with jQuery, Bootstrap, and the PokéAPI that acts as an encyclopedia for Pokemon, and allows you to quickly look up information about any Pokemon with infinite scrolling and generation selection.',
      links: [
        { type: 'github', href: 'https://github.com/SimeonTu/pokedex-app', label: 'Github' },
        { type: 'live', href: 'https://simeontu.github.io/pokedex-app/', label: 'Live site' },
      ],
    },
    {
      title: 'Dogecoin Website Redesign',
      image: '/img/project-doge.gif',
      description:
        'A modern redesign of the official Dogecoin cryptocurrency website built with Webflow, offering a new fresh and fun introduction to the digital coin, matching the playful spirit of Doge.',
      links: [{ type: 'live', href: 'https://project-doge.webflow.io/', label: 'Live site' }],
    },
    {
      title: 'Chat App',
      image: '/img/chatapp.png',
      description:
        'A mobile chat app built with React Native that allows users to anonymously send messages in a group chat room and share images or their location.',
      links: [{ type: 'github', href: 'https://github.com/SimeonTu/chat-app', label: 'Github' }],
    },
    {
      title: 'Spotify User Ratings Extension',
      image: '/img/tampermonkey-spotify-extension.jpeg',
      imageAlt: 'Tampermonkey Spotify Extension',
      imageContainer: true,
      description:
        "A Tampermonkey script that automatically pulls user ratings from Album of The Year (AOTY) and displays them directly on Spotify album pages. The rating color smoothly transitions from red to yellow to green based on the score. It's a convenient way to quickly see how albums and tracks are rated without having to leave Spotify.",
      links: [
        {
          type: 'github',
          href: 'https://github.com/SimeonTu/tampermonkey-scripts/tree/main/spotify-ratings-injector',
          label: 'Github',
        },
        {
          type: 'script',
          href: 'https://github.com/SimeonTu/tampermonkey-scripts/raw/refs/heads/main/spotify-ratings-injector/spotify-ratings-injector.user.js',
          label: 'Tampermonkey Script',
        },
      ],
    },
    {
      title: 'eBay Price Tracker',
      image: '/img/ebay-script.jpeg',
      imageAlt: 'eBay Price Tracker Script',
      imageContainer: true,
      imageExtraClass: 'ebay',
      description:
        'A Python script for tracking price trends on eBay by scraping recently sold listings based on user-defined criteria. It calculates key statistics like mean, median, and range of prices, providing a quick snapshot of the market. Perfect for doing research before making informed buying or selling decisions.',
      links: [{ type: 'github', href: 'https://github.com/SimeonTu/ebay-price-tracker', label: 'Github' }],
    },
  ];

  return (
    <>
      <ScrollIndicator />
      <h1 className="h1-work">Projects</h1>

      <div className="grid-projects">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`grid-item${project.featured ? ' featured-project' : ''}`}
            style={project.caseStudy ? { position: 'relative' } : undefined}
          >
            {project.featured && <div className="featured-banner">FEATURED</div>}

            {!!project.caseStudy && (
              <div className="click-me-container">
                <div className="click-me-text">Case study</div>
              </div>
            )}

            <h2 className="grid-title">{project.title}</h2>

            {project.featured ? (
              <a target="_blank" rel="noopener noreferrer" href={project.links?.[0]?.href}>
                <img
                  className="fakeimg"
                  style={project.imageStyle}
                  src={project.image}
                  alt={project.imageAlt ?? project.title}
                />
              </a>
            ) : project.caseStudy ? (
              <Link to={project.caseStudy} style={{ cursor: 'pointer' }}>
                <img className="fakeimg" src={project.image} alt={project.imageAlt ?? project.title} />
              </Link>
            ) : project.imageContainer ? (
              <div className="image-container">
                <img
                  className={`fakeimg${project.imageExtraClass ? ` ${project.imageExtraClass}` : ''}`}
                  src={project.image}
                  alt={project.imageAlt ?? project.title}
                />
              </div>
            ) : (
              <div>
                <img className="fakeimg" src={project.image} alt={project.imageAlt ?? project.title} />
              </div>
            )}

            <p className="grid-description">{project.description}</p>

            <div className="project-links">
              {project.links?.map((l, linkIdx) => (
                <a
                  key={linkIdx}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-links"
                  href={l.href}
                >
                  <img
                    src={l.type === 'github' ? '/img/github.png' : '/img/link.svg'}
                    alt={l.type === 'github' ? 'Github Link' : 'Link'}
                  />
                  <span className="hvr-pulse-grow">{l.label}</span>
                </a>
              ))}

              {!!project.caseStudy && (
                <Link className="project-links" to={project.caseStudy}>
                  <img src="/img/link.svg" alt="Case study link" />
                  <span className="hvr-pulse-grow">Case study</span>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Work;
