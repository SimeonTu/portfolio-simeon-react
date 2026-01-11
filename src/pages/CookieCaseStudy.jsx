import { Link } from 'react-router-dom';
import TextWobble from '../components/effects/TextWobble';
import InfiniteScroller from '../components/effects/InfiniteScroller';
import Footer from '../components/common/Footer';

function CookieCaseStudy() {
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
            <img className="cookie-img" src="/img/real-cookie.png" alt="Cookie" />
            <h1 className="study-h1 awesome">
              <TextWobble>Cookie</TextWobble>
            </h1>
            <div className="cookie-img-new-container">
              <img className="cookie-img" src="/img/real-cookie.png" alt="Cookie" />
              <img className="newblast" src="/img/newblast.gif" alt="New" />
            </div>
          </div>
          <h2 className="cookie-h2">Case Study</h2>
        </div>

        <div className="study-section-wrapper cookie-text">
          <div className="study-section">
            <h2>Overview</h2>
            <p className="ifdb-paragraph">
              The Cookie recipe app is a dynamic, multi-user web application designed to allow users to view, create, and
              modify recipes. Users can search for recipes by ingredients, and the app automatically categorizes recipes
              by difficulty level based on predefined criteria. Developed with Django and Python, the app leverages a
              Postgres database and is deployed on Heroku for accessibility.
            </p>

            <img id="ifdb-img-1" className="cookie-img-border ifdb-img" src="/img/cookie.png" alt="Cookie home page" />
            <p className="study-img-description">Fig 1. Cookie logged in home page</p>
          </div>

          <div className="study-section">
            <h2>Objective</h2>
            <p>
              The primary goal was to transition from a command-line interface to a fully-featured web application,
              demonstrating an understanding of the Django web framework and development skills. The app aimed to provide
              a platform for users to share and discover recipes, enhancing user engagement through interactive features
              such as recipe search, user authentication, and dynamic data visualization.
            </p>
          </div>

          <div className="study-section">
            <h2>Key Features</h2>

            <ul>
              <li>
                <span className="cookie-li-title">User Authentication:</span> Implemented Django's built-in authentication
                system to manage user accounts, including sign-up, login, and logout functionalities.
              </li>
              <li>
                <span className="cookie-li-title">Recipe Management:</span> Users can add, view, and edit recipes. Each
                recipe includes ingredients, cooking times, and automatically calculated difficulty levels.
              </li>
              <li>
                <span className="cookie-li-title">Search Functionality:</span> A powerful search feature allows users
                to find recipes based on ingredients or other criteria.
              </li>
              <li>
                <span className="cookie-li-title">Data Visualization:</span> Integrated analytics dashboard displaying
                statistics about recipes, such as the distribution of cooking times and popularity of ingredients, using
                pandas dataframes and matplotlib for dynamic chart generation.
              </li>
              <li>
                <span className="cookie-li-title">Responsive Design:</span> Ensured the application is accessible on
                various devices, maintaining a user-friendly interface.
              </li>
            </ul>

            <h2 style={{ marginTop: '2rem' }}>Tech Stack</h2>

            <ul>
              <li>
                <span className="cookie-li-title">Frontend:</span> HTML and CSS for page structure and styling, with
                templates rendering dynamic content served by Django.
              </li>
              <li>
                <span className="cookie-li-title">Backend:</span> Python and Django framework for server-side logic,
                including URL routing, view functions, and database models.
              </li>
              <li>
                <span className="cookie-li-title">Database:</span> PostgreSQL for production with a structured schema
                to store user data, recipes, and ingredients.
              </li>
              <li>
                <span className="cookie-li-title">Deployment:</span> Deployed on Heroku with Gunicorn as the WSGI
                server, ensuring application availability on the web.
              </li>
            </ul>

            <InfiniteScroller direction="right" speed="slow">
              <img style={{ height: '64px' }} src="/img/logos/html.png" alt="HTML logo" />
              <img style={{ height: '64px' }} src="/img/logos/css.png" alt="CSS logo" />
              <img style={{ height: '64px' }} src="/img/logos/python.png" alt="Python logo" />
              <img style={{ height: '64px' }} src="/img/logos/django.png" alt="Django logo" />
              <img style={{ height: '64px' }} src="/img/logos/postgresql.png" alt="PostgreSQL logo" />
              <img style={{ height: '64px' }} src="/img/logos/heroku.png" alt="Heroku logo" />
            </InfiniteScroller>

            <div className="study-section study-middle-section" style={{ padding: '0 !important', marginTop: '2rem' }}>
              <h2>Challenges and Solutions</h2>

              <div className="study-full-container study-normal-container">
                <div className="study-half-container">
                  <h3>Implementing an Ingredient Search Function</h3>
                  <p>
                    One of the primary hurdles was crafting an intuitive search function that could handle
                    ingredient-based queries efficiently. The challenge was addressed by integrating the Django Select2
                    library, which facilitated a multi-select input field in the UI. This approach allowed users to
                    select multiple ingredients from a dropdown, each displayed as a "pill" within the field, vastly
                    improving the user experience and search precision.
                  </p>
                </div>

                <div className="study-half-container">
                  <img className="cookie-img-border ifdb-img" src="/img/cookie-fig-2.png" alt="Search options" />
                  <p className="study-img-description" style={{ marginBottom: '1rem' }}>
                    Fig 2. Search options
                  </p>
                </div>
              </div>

              <div className="study-full-container study-reverse-container">
                <div className="study-half-container">
                  <h3>Facilitating Recipe Submissions by Registered Users:</h3>
                  <p>
                    Another significant challenge was designing an intuitive interface for users to submit new recipes,
                    which involved managing multiple ingredients and preparation steps. This complexity was navigated
                    through the use of Django FormSets coupled with jQuery. The submit_recipe view facilitated the
                    creation and management of recipes, ingredients, and steps, ensuring a seamless experience for the
                    user. Then the template where new recipes can be added by registered users utilized jQuery scripts to
                    dynamically add or remove form fields for ingredients and steps, making the recipe submission process
                    both flexible and user-friendly.
                  </p>
                </div>

                <div className="study-half-container">
                  <img className="cookie-img-border ifdb-img" src="/img/cookie-fig-3.png" alt="Submit recipe view" />
                  <p className="study-img-description" style={{ marginBottom: '1rem' }}>
                    Fig 3. Submit recipe view
                  </p>
                </div>
              </div>

              <div className="study-full-container study-normal-container">
                <div className="study-half-container">
                  <h3>Implementing Data Visualization: </h3>
                  <p>
                    Trying to show statistics for filtered recipe searches posed a significant challenge, particularly the
                    creation of charts like "Recipe Number by Difficulty," "Recipes by Cooking Time," and "Ingredient
                    Usage." The solution involved leveraging pandas dataframes to efficiently manipulate and prepare the
                    dataset, followed by matplotlib to generate the charts, then integrating these visualizations within
                    was achieved by converting matplotlib plots into images that could be rendered directly in HTML
                    templates. This process involved saving the plot to a BytesIO stream, encoding it to Base64, and then
                    safely embedding it within the webpage, thus overcoming the challenge of seamlessly integrating
                    complex data visualizations into the web app's frontend.
                  </p>
                </div>

                <div className="study-half-container">
                  <img className="cookie-img-border ifdb-img" src="/img/cookie-fig-4.png" alt="Data visualization" />
                  <p className="study-img-description">Fig 4. Data visualization</p>
                </div>
              </div>
            </div>

            <div className="study-section">
              <h2>Conclusion</h2>
              <p>
                In the course of developing the "Cookie" recipe app, I encountered a range of challenges that
                significantly enhanced my skills in web development, particularly within the Django framework. This
                project not only reinforced my understanding of Django's robust capabilities—from handling user
                authentication to complex database operations—but also deepened my expertise in front-end technologies and
                data visualization techniques. Integrating data visualizations using pandas and matplotlib taught me to
                effectively present complex data in an accessible format. These experiences were crucial in demonstrating
                my ability to architect and develop sophisticated web applications, showcasing my growth as a developer
                ready to tackle professional challenges in software development.
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

export default CookieCaseStudy;
