import InfiniteScroller from '../components/effects/InfiniteScroller';
import { useEasterEgg } from '../context/EasterEggContext';
import useAudio from '../hooks/useAudio';

function About() {
  const { findEgg } = useEasterEgg();
  const { play: playClick } = useAudio('/sounds/click.mp3', 0.1);
  const { play: playScore } = useAudio('/sounds/coin.mp3', 0.5);

  const handleScrollerEggClick = (e) => {
    e.stopPropagation();
    playClick();
    const found = findEgg('scroller');
    if (found) {
      playScore();
    }
  };

  const toolLogos = [
    { src: '/img/logos/html.png', alt: 'HTML logo' },
    { src: '/img/logos/css.png', alt: 'CSS logo' },
    { src: '/img/logos/js.png', alt: 'JavaScript logo' },
    { src: '/img/logos/jquery.png', alt: 'jQuery logo' },
    { src: '/img/logos/bootstrap.png', alt: 'Bootstrap logo' },
    { src: '/img/logos/MongoDB_8bit.png', alt: 'MongoDB logo' },
    { src: '/img/logos/mysql.png', alt: 'MySQL logo' },
    { src: '/img/logos/google_cloud.png', alt: 'Google Cloud logo' },
    { src: '/img/logos/Expressjs_8bit.png', alt: 'Express.js logo' },
    { src: '/img/logos/Angular_8bit_bigger.png', alt: 'Angular Logo' },
    { src: '/img/logos/React_8bit_bigger.png', alt: 'React logo' },
    { src: '/img/logos/nextjs_8bit.png', alt: 'Next.js logo' },
    { src: '/img/logos/react-native.png', alt: 'React Native logo' },
    { src: '/img/logos/Node.js_8bit.png', alt: 'Node.js logo' },
    { src: '/img/logos/Passport_8bit.png', alt: 'Passport logo' },
    { src: '/img/logos/SW_8bit.png', alt: 'Swagger logo' },
    { src: '/img/logos/heroku.png', alt: 'Heroku logo' },
    { src: '/img/creme-egg.png', alt: 'Easter Egg', id: 'scroller-egg', isEgg: true },
  ];

  const toolCards = [
    { title: 'Languages', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'PHP'] },
    {
      title: 'Front-End',
      items: ['React/Redux', 'Next.js', 'Vue.js', 'Angular', 'jQuery', 'Bootstrap', 'Tailwind CSS', 'Angular Material', 'PWAs'],
    },
    {
      title: 'Back-End',
      items: ['Node.js', 'Django', 'Express', 'Passport.js', 'Morgan', 'AWS', 'AWS Lambda', 'RESTful APIs', 'GraphQL'],
    },
    {
      title: 'Databases & Web Services',
      items: ['MongoDB', 'PostgreSQL', 'Supabase', 'MySQL', 'Google Cloud', 'SQLAlchemy', 'Heroku', 'Netlify', 'Railway', 'Cloudflare'],
    },
    { title: 'Testing & QA', items: ['Jest', 'Cucumber', 'Puppeteer', 'Postman'] },
    {
      title: 'Version control & Documentation',
      items: ['Git / GitHub', 'JSDoc', 'TypeDoc', 'Swagger.js'],
    },
    { title: 'Mobile Development', items: ['React Native', 'Expo', 'Android Studio', 'Java / Kotlin'] },
    { title: 'Design Tools', items: ['Adobe Photoshop', 'Canva', 'Affinity', 'Figma'] },
  ];

  return (
    <>
      <p className="p-about">
        Hi, I’m Simeon Tudzharov, a web developer passionate about design and technology. I’m fueled by a profound
        fascination for innovation and a knack for creative expression nurtured through years of multimedia editing and
        coding for personal projects, driving my ambition to excel in a full-stack developer role. With a keen eye for
        detail, adept problem-solving, and a knack for efficient communication gained from my previous experiences in
        administration and hospitality, I aspire to immerse myself in collaborative environments where I can leverage my
        diverse skill set to contribute to cutting-edge projects and drive positive change in the industry and the
        world.
      </p>

      <h2 style={{ marginTop: '1rem' }}>Toolbelt </h2>
      <h4>(scroll down to view all)</h4>

      <InfiniteScroller speed="medium" direction="right" innerClassName="scroller-about">
        {toolLogos.map((logo, idx) => (
          <img
            key={idx}
            id={logo.id}
            src={logo.src}
            alt={logo.alt}
            style={{ height: '64px', cursor: logo.isEgg ? 'pointer' : 'default' }}
            onClick={logo.isEgg ? handleScrollerEggClick : undefined}
          />
        ))}
      </InfiniteScroller>

      <div className="about-cards-wrapper">
        {toolCards.map((card) => (
          <div key={card.title} className="tools-card">
            <h3 className="card-title">{card.title}</h3>
            <div className="tools-wrapper">
              {card.items.map((item) => (
                <span key={item} className="tools-card-item">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default About;
