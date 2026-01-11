import { Link } from 'react-router-dom';
import TextWobble from '../components/effects/TextWobble';
import InfiniteScroller from '../components/effects/InfiniteScroller';
import Footer from '../components/common/Footer';

function IFDbCaseStudy() {
  return (
    <>
      <div className="main-content-wrapper ifdb-content-wrapper">
        <div style={{ position: 'relative' }}>
          <Link to="/work">
            <img className="ifdb-back-btn" src="/img/back-button-pink.png" alt="Back to projects" />
          </Link>
        </div>

        <div className="study-header">
          <div className="study-flavor-text" style={{ alignItems: 'center' }}>
            <img className="ifdb-gif" src="/img/movie-clapperboard.gif" alt="Movie clapperboard" />
            <TextWobble className="study-h1 awesome">IFDb</TextWobble>
            <div style={{ position: 'relative' }}>
              <img className="ifdb-gif" src="/img/movie-clapperboard.gif" alt="Movie clapperboard" />
              <img className="newblast" src="/img/newblast.gif" alt="New" />
            </div>
          </div>

          <h2>Case Study</h2>
        </div>

        <div className="study-section-wrapper ifdb-text">
          <div className="study-section">
            <h2>Overview</h2>
            <p className="ifdb-paragraph">
              IFDb is a comprehensive movie database web application designed for movie enthusiasts who want to access and
              save information about their favorite films. The project encompasses both front-end and back-end
              development, leveraging modern technologies to deliver a seamless user experience. With a focus on
              usability, security, and functionality, IFDb aims to provide users with a platform to explore, discover,
              and manage their movie preferences efficiently.
            </p>

            <img id="ifdb-img-1" className="fakeimg ifdb-img" src="/img/ifdb-img-1.png" alt="Main movie view" />
            <p className="ifdb-img-description">Fig 1. Main movie view for Angular/React clients</p>
          </div>

          <div className="study-section">
            <h2>Purpose and Objective</h2>
            <p>
              The primary objective of IFDb is to create a user-friendly platform for movie enthusiasts to access and
              organize information about movies. By leveraging two robust tech stacks and implementing essential features
              such as user registration, authentication, and database management, the project aims to provide a
              comprehensive solution for users to explore and interact with movie data seamlessly.
            </p>
          </div>

          <div className="study-section">
            <h2>Tech Stack / Tools</h2>
            <p>
              IFDb utilizes the MERN (MongoDB, Express.js, React, Node.js) and MEAN (MongoDB, Express.js, Angular,
              Node.js) tech stacks for its development, showcasing a combination of front-end and back-end technologies.
              The back-end is built using Node.js, Express, and MongoDB, facilitating the creation of a RESTful API for
              seamless communication between the server and client-side applications. Key tools and technologies include:
            </p>

            <ul>
              <li>
                <span className="ifdb-li-title">MongoDB:</span> A NoSQL database used for storing data securely,
                providing scalability and flexibility.
              </li>
              <li>
                <span className="ifdb-li-title">Express.js:</span> A web application framework for Node.js, providing
                robust features for handling HTTP requests, routing, middleware, etc.
              </li>
              <li>
                <span className="ifdb-li-title">Angular:</span> A front-end framework developed by Google for building
                dynamic web applications using TypeScript, offering a comprehensive set of tools and features for
                efficient development and maintenance.
              </li>
              <li>
                <span className="ifdb-li-title">React:</span> A JavaScript library developed by Facebook for building
                user interfaces, allowing developers to create interactive UI components with ease and efficiency through
                a component-based architecture.
              </li>
              <li>
                <span className="ifdb-li-title">Node.js:</span> An open-source, server-side JavaScript runtime
                environment enabling the execution of JavaScript code outside the browser.
              </li>
              <li>
                <span className="ifdb-li-title">Passport:</span> Middleware used for implementing authentication
                strategies, ensuring secure user authentication.
              </li>
              <li>
                <span className="ifdb-li-title">Swagger.js:</span> Tool for generating interactive API documentation
                using the OpenAPI Specification, facilitating clear documentation of API endpoints.
              </li>
            </ul>

            <InfiniteScroller direction="right" speed="medium">
              <img style={{ height: '64px' }} src="/img/logos/MongoDB_8bit.png" alt="MongoDB logo" />
              <img style={{ height: '64px' }} src="/img/logos/Expressjs_8bit.png" alt="Express.js logo" />
              <img style={{ height: '64px' }} src="/img/logos/Angular_8bit_bigger.png" alt="Angular Logo" />
              <img style={{ height: '64px' }} src="/img/logos/React_8bit_bigger.png" alt="React logo" />
              <img style={{ height: '64px' }} src="/img/logos/Node.js_8bit.png" alt="Node.js logo" />
              <img style={{ height: '64px' }} src="/img/logos/Passport_8bit.png" alt="Passport logo" />
              <img style={{ height: '64px' }} src="/img/logos/SW_8bit.png" alt="Swagger logo" />
            </InfiniteScroller>
          </div>

          <div className="study-section study-middle-section">
            <h2>Approach</h2>

            <div className="study-full-container study-normal-container">
              <div className="study-half-container">
                <h3>Back-end</h3>
                <p>
                  The back-end development of IFDb focuses on building a secure and efficient REST API to handle user
                  authentication, data management, and interaction with the MongoDB database. Key aspects of the
                  back-end development process include:
                </p>

                <ul style={{ paddingLeft: '1rem' }}>
                  <li>
                    Utilizing Node.js and Express.js to create the server-side application, defining API endpoints for
                    user registration, login, movie, and data manipulation.
                  </li>
                  <li>
                    Implementing basic HTTP authentication for logging in, and then JWT authentication for authorizing
                    users with the functions of the app, utilizing Passport middleware for authentication strategies.
                  </li>
                  <li>
                    Integrating Mongoose to define database models and interact with MongoDB, ensuring seamless
                    integration of business logic into the API methods.
                  </li>
                  <li>
                    Ensuring data security by hashing user passwords and implementing data validation to prevent errors.
                  </li>
                  <li>
                    Deploying the back-end to the remote PaaS provider Heroku for accessibility and scalability.
                  </li>
                </ul>
              </div>

              <div className="study-half-container">
                <img className="fakeimg ifdb-img" src="/img/ifdb-img-2.png" alt="API endpoints in backend" />
                <p className="ifdb-img-description">Fig 2. API endpoints in backend</p>
              </div>
            </div>

            <div>
              <h3 style={{ marginTop: '1rem' }}>Front-end</h3>

              <p style={{ marginBottom: '0.5rem' }}>
                The front-end development of IFDb encompasses two distinct client-side implementations, utilizing both
                React and Angular frameworks to show skills in using both frameworks and offer users varied experiences
                while interacting with the platform.
              </p>

              <div className="study-full-container">
                <div className="study-half-container-wrapper study-reverse-container">
                  <div className="study-half-container">
                    <h4>React version</h4>
                    <p>
                      In the React version of IFDb, the focus lies on building a responsive and interactive user
                      interface using React, a popular JavaScript library for building user interfaces. Key aspects of
                      the front-end development process include:
                    </p>
                    <ul style={{ paddingLeft: '1rem' }}>
                      <li>
                        Build a single-page application (SPA), structuring the project according to industry standards.
                      </li>
                      <li>
                        Leveraging JSX for writing HTML-like markup inside JS files, utilizing React hooks for
                        interacting with components.
                      </li>
                      <li>
                        Utilizing React Bootstrap for designing forms and applying authentication logic and real-time form
                        validation.
                      </li>
                      <li>
                        Utilizing external libraries such as Moment.js for handling date and time manipulation, bcrypt for
                        comparing password hashes, and FontAwesome for implementing and styling icons.
                      </li>
                    </ul>
                  </div>

                  <div className="study-half-container">
                    <img className="fakeimg ifdb-img" src="/img/ifdb-react.png" alt="User profile view in React client" />

                    <p className="ifdb-img-description">Fig 3. User profile view in React client</p>
                  </div>
                </div>

                <div className="study-half-container-wrapper">
                  <div className="study-half-container">
                    <h4>Angular version</h4>
                    <p>
                      In addition to the React version, IFDb also features an Angular implementation, offering users an
                      alternative client-side experience. Key aspects of the Angular front-end development process
                      include:
                    </p>
                    <ul style={{ paddingLeft: '1rem' }}>
                      <li>
                        Leveraging Angular's robust framework for building dynamic web applications with a focus on
                        scalability and maintainability.
                      </li>
                      <li>
                        Utilizing Angular's component-based architecture and TypeScript support for enhanced code
                        organization and type safety.
                      </li>
                      <li>
                        Implementing Angular forms for user input validation and authentication processes, ensuring a
                        seamless user experience.
                      </li>
                      <li>
                        Incorporating Angular Material for designing UI components and facilitating consistent design
                        patterns across the application.
                      </li>
                      <li>
                        Leveraging Angular's powerful dependency injection system for efficient management of
                        application-wide services and dependencies.
                      </li>
                    </ul>
                  </div>

                  <div className="study-half-container">
                    <img className="fakeimg ifdb-img" src="/img/ifdb-angular.png" alt="User profile view in Angular client" />

                    <p className="ifdb-img-description">Fig 4. User profile view in Angular client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="study-section">
            <h2>Key Takeaways</h2>
            <p>
              IFDb represents a milestone in my journey as a full-stack developer, showcasing proficiency in a range of
              technologies and methodologies essential for building modern web applications. Throughout this project, I've
              learned invaluable lessons in both front-end and back-end development, including the importance of robust
              authentication mechanisms, effective data management, and responsive UI design. These skills are not only
              crucial for delivering high-quality products like IFDb but also serve as foundational pillars for a
              successful career as a full-stack developer. Moving forward, I recognize the significance of continuous
              learning and adaptation to evolving technologies, ensuring that I remain well-equipped to tackle diverse
              challenges in the ever-changing landscape of web development.
            </p>
          </div>

          <img className="ifdb-divider" src="/img/_orb_lavender.gif" alt="Divider" />

          <div className="study-section">
            <h2>Conclusion</h2>
            <p>
              IFDb represents a comprehensive movie database web application that combines the power of modern front-end
              and back-end technologies to provide users with a seamless movie exploration experience. By leveraging the
              MERN and MEAN stacks for development and incorporating essential features such as user authentication, data
              management, and responsive design, IFDb aims to cater to the needs of movie enthusiasts worldwide, with a
              focus on usability, security, and functionality.
            </p>

            <h3 style={{ marginTop: '1rem' }}>Reflection: Successes and Challenges</h3>
            <p>
              While building each part of the app, I faced a multitude of challenges that I had to overcome, including
              working with and figuring out the structure of component-based frameworks for the first time and passing
              props from and to different components, managing and optimizing data in the database, ensuring proper
              security through authentication and authorization methods, coming up with an intuitive user experience, and
              others.
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Although there were quite a few challenges, I successfully managed to overcome them through rigurous
              troubleshooting, careful research, and a lot of debugging. Looking back on the project, I'm happy that I
              was able to implement every aspect of a fully-featured full-stack web app, and even some extras ideas that I
              had throughout my time working on the project, such as real-time form validation, showing suggested movies
              based on a viewed movie's genre, and nicely formatted movie information including IMDb ratings, and as a
              result, I believe I built an app that offers users a robust and intuitive platform to explore and interact
              with their favorite movies.
            </p>
            <img style={{ display: 'block', width: '200px', margin: '0 auto' }} src="/img/eat-mochi.gif" alt="Thank you" />
            <p className="ifdb-img-description">Thank you for reading</p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default IFDbCaseStudy;
