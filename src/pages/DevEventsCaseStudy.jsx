import { Link } from 'react-router-dom';
import TextWobble from '../components/effects/TextWobble';
import InfiniteScroller from '../components/effects/InfiniteScroller';
import Footer from '../components/common/Footer';

function DevEventsCaseStudy() {
  return (
    <>
      <div className="main-content-wrapper ifdb-content-wrapper">
        <div style={{ position: 'relative' }}>
          <Link to="/work">
            <img className="ifdb-back-btn" src="/img/back-button-pink.png" alt="Back to projects" />
          </Link>
        </div>

        <div className="study-header">
          <div className="study-flavor-text" style={{ alignItems: 'center', marginTop: '2.5rem' }}>
            <h1 style={{ lineHeight: '5rem' }} className="study-h1 awesome">
              <TextWobble>Dev Events</TextWobble>
            </h1>
            <div className="globe-new-container">
              <img className="cookie-img" src="/img/globe.gif" alt="Globe" />
              <img className="newblast" src="/img/newblast.gif" alt="New" />
            </div>
          </div>
          <h2 className="cookie-h2">Case Study</h2>
        </div>

        <div className="study-section-wrapper dev-events-text">
          <div className="study-section">
            <h2>Overview</h2>
            <p className="ifdb-paragraph">
              In an increasingly digital world, the demand for tech-related events is growing. To cater to this demand,
              Dev Events was developed as a progressive web application (PWA) using a serverless architecture. The project
              emphasized a test-driven development (TDD) approach to ensure robust and efficient delivery of new features.
              This case study explores the development process, technologies, and strategies employed in creating the Dev
              Events app.
            </p>

            <img id="ifdb-img-1" className="cookie-img-border ifdb-img" src="/img/dev-events-fig-1.gif" alt="Dev Events home page" />
            <p className="study-img-description">Fig 1. Dev Events home page</p>
          </div>

          <div className="study-section">
            <h2>Project Goals and Learning Objectives</h2>
            <p>
              The primary goal of the Dev Events web app was to provide a seamless user experience in discovering and
              interacting with upcoming tech events across various cities. Key learning objectives for this project
              included mastering TDD, understanding serverless functions, engaging in comprehensive testing (unit,
              integration, and user acceptance), and implementing continuous integration and delivery (CI/CD). Additional
              skills honed during this project were developing PWAs and utilizing data visualization techniques.
            </p>
          </div>

          <div className="study-section">
            <h2>Development Strategy</h2>

            <ul>
              <li>
                <span className="dev-events-li-title">Test-Driven Development (TDD):</span> The project commenced with
                a TDD approach, where test scenarios were defined before any functional code was written. This ensured
                that each feature was developed with clear objectives and robustness from the outset.
              </li>
              <li>
                <span className="dev-events-li-title">Serverless Architecture:</span> AWS Lambda was chosen for backend
                functions, significantly reducing the infrastructure management overhead and scaling effortlessly according
                to demand. This choice aligned well with the agile and scalable nature of a tech event discovery app.
              </li>
              <li>
                <span className="dev-events-li-title">Progressive Web Application:</span>The app was designed as a PWA to
                leverage benefits such as instant loading, offline support, and cross-platform functionality on desktop
                and mobile devices. This ensured a native-like experience for users irrespective of their device or
                network conditions.
              </li>
              <li>
                <span className="dev-events-li-title">Authentication and Data Fetching:</span> Google OAuth was
                implemented for authentication. This allowed the app to fetch data securely from the Google Calendar API,
                enabling users to view tech events that were curated and added to a centralized calendar.
              </li>
              <li>
                <span className="dev-events-li-title">Data Visualization:</span> The app utilized Recharts for
                visualizing data such as the number of events per city and the frequency of technology topics. These
                visualizations helped users quickly grasp the tech landscape in different regions.
              </li>
            </ul>

            <h2 style={{ marginTop: '2rem' }}>Tech Stack</h2>

            <ul>
              <li>
                <span className="dev-events-li-title">Frontend:</span> React, HTML/JSX, CSS/SCSS, React Bootstrap, and
                NProgress for UI development and styling.
              </li>
              <li>
                <span className="dev-events-li-title">Backend:</span> AWS Lambda functions to handle the Google Auth
                server-side process in a serverless manner.
              </li>
              <li>
                <span className="dev-events-li-title">Testing:</span> Jest-Cucumber, RTL (React Testing Library), and
                Puppeteer for a wide range of tests from unit to end-to-end.
              </li>
              <li>
                <span className="dev-events-li-title">APIs:</span> Google Calendar for event data and OpenAI API for
                integrating AI-driven features.
              </li>
              <li>
                <span className="dev-events-li-title">Others:</span> The application was built as a PWA for offline
                functionality and device independence.
              </li>
            </ul>

            <div style={{ width: '80%', margin: '0 auto' }}>
              <InfiniteScroller direction="right" speed="medium">
                <img style={{ height: '96px' }} src="/img/logos/React_8bit_bigger.png" alt="React logo" />
                <img style={{ height: '96px' }} src="/img/logos/html.png" alt="HTML logo" />
                <img style={{ height: '96px' }} src="/img/logos/css.png" alt="CSS logo" />
                <img style={{ height: '96px' }} src="/img/logos/amazon.png" alt="AWS logo" />
                <img style={{ height: '96px' }} src="/img/logos/jest.png" alt="Jest logo" />
                <img style={{ height: '96px' }} src="/img/logos/puppeteer.png" alt="Puppeteer logo" />
                <img style={{ height: '96px' }} src="/img/logos/google.png" alt="Google logo" />
              </InfiniteScroller>
            </div>

            <div className="study-section study-middle-section" style={{ padding: '0 !important', marginTop: '2rem' }}>
              <h2>Features</h2>

              <div className="study-full-container study-normal-container">
                <div className="study-half-container">
                  <h3>User-Centric Design:</h3>
                  <p>
                    A friendly landing page with a "Login with Google" button improved user onboarding compared to a
                    direct OAuth prompt. The app remembers that a user has logged in and stores a unique token which
                    removes the necessity to log in again on future site visits.
                  </p>
                </div>

                <div className="study-half-container">
                  <img
                    className="cookie-img-border ifdb-img dev-events-fig-2"
                    src="/img/dev-events-fig-2.png"
                    alt="Login screen"
                  />
                  <p className="study-img-description" style={{ marginBottom: '1rem' }}>Fig 2. Login screen</p>
                </div>
              </div>

              <div className="study-full-container study-reverse-container">
                <div className="study-half-container">
                  <h3>Location-Based Event Filtering:</h3>
                  <p>
                    Integrating the Geolocation API, the app detects the user's location and offers a prompt to display
                    events from their country, enhancing personalization.
                  </p>
                </div>

                <div className="study-half-container">
                  <img
                    className="cookie-img-border ifdb-img dev-events-figs-3-4"
                    src="/img/dev-events-fig-3.gif"
                    alt="Filtering events based on the user's location"
                  />
                  <p className="study-img-description" style={{ marginBottom: '1rem' }}>
                    Fig 3. Filtering events based on the user's location
                  </p>
                </div>
              </div>

              <div className="study-full-container study-normal-container">
                <div className="study-half-container">
                  <h3>AI Integration: </h3>
                  <p>
                    A unique feature where the app uses artificial intelligence to suggest new names for itself,
                    showcasing an innovative use of AI in practical applications.
                  </p>
                </div>

                <div className="study-half-container">
                  <img
                    className="cookie-img-border ifdb-img dev-events-figs-3-4"
                    src="/img/dev-events-fig-4.gif"
                    alt="Name generation based on artificial intelligence"
                  />
                  <p className="study-img-description" style={{ marginBottom: '1rem' }}>
                    Fig 4. Name generation based on artificial intelligence
                  </p>
                </div>
              </div>

              <div className="study-full-container study-reverse-container">
                <div className="study-half-container">
                  <h3>Interactive Data Visualization:</h3>
                  <p>
                    The app incorporates interactive charts built with Recharts to dynamically display the distribution of
                    events across different cities and the prevalence of various technology topics, enhancing user
                    engagement and providing insightful analytics at a glance.
                  </p>
                </div>

                <div className="study-half-container">
                  <img
                    className="cookie-img-border ifdb-img dev-events-fig-5"
                    src="/img/dev-events-fig-5.png"
                    alt="Generated charts based on list of events"
                  />
                  <p className="study-img-description" style={{ marginBottom: '1rem' }}>
                    Fig 5. Generated charts based on list of events
                  </p>
                </div>
              </div>
            </div>

            <div className="study-section">
              <h2>Conclusion</h2>
              <p>
                Building the Dev Events app was an enriching experience that allowed me to apply and demonstrate the
                skills I've learned in a practical setting. This project not only taught me the intricacies of
                test-driven development and serverless architecture but also allowed me to explore the challenges of
                designing a user-focused progressive web application. Each feature added and obstacle overcome provided a
                deep dive into modern web technologies and reinforced my ability to create scalable, responsive solutions.
              </p>
            </div>

            <img style={{ display: 'block', width: '200px', margin: '0 auto' }} src="/img/eat-mochi.gif" alt="Thank you" />
            <p className="study-img-description">Thank you for reading</p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default DevEventsCaseStudy;
