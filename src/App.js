import { useEffect, useState } from 'react';
import './App.css';
import office from './images/office.jpg';
import hrPortal from './images/hrportal.png';
import curoRc from './images/curorc.png';
import rfpChatBoard from './images/rfp.png';
import workexperience from './images/workexperiance.jpg';
import education from './images/education.jpg';
import skillsImage from './images/skills.png';
import certificationImage from './images/Certification.png';
import heroImage from './images/hero image.png';
import contactImage from './images/contact.png';

const heropic = heroImage;

const projects = [
  {
    title: 'RFP Chat Board',
    stack: 'React (Functional Components), JavaScript, CSS, Material UI',
    image: rfpChatBoard,
    highlights: [
      'Designed a scalable folder architecture for enterprise RFP documents, including nested tree view support to improve large-file navigation and reduce lookup time for users.',
      'Implemented bulk operations like select, rename, delete, and validation-driven upload controls with file size/type restrictions to prevent invalid submissions.',
      'Built configurable date and time selection modules that allow multi-time scheduling and alert workflows for cross-team coordination.',
      'Created dynamic custom field handling so business teams can capture structured data without additional code changes for each requirement.',
    ],
  },
  {
    title: 'Human Resources (HR) Management Portal',
    stack: 'React (Class Components), JavaScript, Node.js',
    image: hrPortal,
    highlights: [
      'Developed face-based attendance flow integrated with present-day summaries to improve tracking accuracy and reduce manual updates.',
      'Built visitor log management, work-from-home timesheet modules, and approval pipelines that improved operational transparency for managers.',
      'Added secure role-based access controls for HR features, ensuring that sensitive employee records and actions were permission-protected.',
      'Integrated reporting dashboards for attendance analytics, helping teams monitor trends and make faster staffing decisions.',
    ],
  },
  {
    title: 'CuroRC',
    stack: 'React, Mantine, Axios, jsPDF, xlsx',
    image: curoRc,
    highlights: [
      'Engineered responsive tab-oriented Manage and Detail interfaces with reusable components that accelerated feature development across multiple modules.',
      'Built production-ready data tables with search, pagination, empty states, and action consistency for Members, Affiliates, Billing, and Orders.',
      'Implemented export capabilities for PDF and Excel using jsPDF and xlsx, enabling filtered data downloads for reporting and stakeholder sharing.',
      'Improved reliability through centralized Axios API configuration, predictable loading states, and user feedback toasts for key workflows.',
    ],
  },
];

const skills = [
  'Front-end Development',
  'React',
  'JavaScript',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'Bootstrap',
  'Node.js',
  'Git & Github',
  'Postman API',
  'Redux'
];

const certifications = [
  'Electrical Design Workshop by SkillDzire.',
  "National Seminar on Sustainable Practices by Acharya Nagarjuna University, Guntur.",
  'Special Police Officer (NSS Volunteer) during 2019 elections, Vissannapet.',
];

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = documentHeight > 0 ? Math.min((scrollTop / documentHeight) * 100, 100) : 0;
      setShowScrollTop(scrollTop > 320);
      setScrollProgress(progress);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
  };

  return (
    <div className="app-shell">
      <div className="bg-orb orb-one" />
      <div className="bg-orb orb-two" />
      <div className="bg-grid" />

      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="brand-block">
            <p className="brand">SYED AJMAL QUADRI</p>
            <p className="sidebar-role">Frontend Developer</p>
          </div>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>
        <div className="sidebar-photo">
          <img src={office} alt="Syed Ajmal Quadri profile" className="profile-photo" />
        </div>
        <nav className="side-nav">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="sidebar-meta">
          <span>Nuzvid, India</span>
          <span>ajmalquadri999@gmail.com</span>
          <span>+91 6301861340</span>
        </div>
      </aside>

      <main className="content">
        <header className="hero section" id="home">
          <div className="hero-content reveal">
            <p className="pill">Frontend Developer</p>
            <h1>Building fast, elegant, and production-ready web experiences.</h1>
            <p className="lead">
              Detail-oriented developer experienced in React and JavaScript, focused
              on performance, clean UI architecture, and collaborative delivery.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">View Work</a>
              <a href="#contact" className="btn btn-ghost">Hire Me</a>
            </div>
          </div>
          <div className="hero-image glass-card reveal">
            <img src={heropic} alt="Syed Ajmal Quadri hero portrait" />
          </div>
        </header>

        <section id="projects" className="section">
          <h2 className="section-title">Featured Projects</h2>
          <div className="card-grid">
            {projects.map((project) => (
              <article className="glass-card reveal" key={project.title}>
                <div className="project-image">
                  {project.image ? <img src={project.image} alt={project.title} /> : <span>Add project image</span>}
                </div>
                <h3>{project.title}</h3>
                <p className="stack">{project.stack}</p>
                <ul>
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section dual-layout">
          <div className="glass-card reveal">
            <div className="section-image section-image-experience">
              <img src={workexperience} alt="Work experience" />
            </div>
            <h2 className="section-title">Experience</h2>
            <h3>Jr. Application Developer</h3>
            <p className="stack">Maganti IT Solutions | 05/2024 - Current</p>
            <ul>
              <li>Developed UI components using HTML, CSS, JavaScript, and React.</li>
              <li>Debugged production issues and optimized existing application code.</li>
              <li>Built database objects and documented processes for team continuity.</li>
              <li>Collaborated with designers and developers in agile standups.</li>
            </ul>
          </div>

          <div className="glass-card reveal">
            <div className="section-image section-image-education">
              <img src={education} alt="Education" />
            </div>
            <h2 className="section-title">Training & Education</h2>
            <h3>Training - Maganti IT Solutions</h3>
            <p className="stack">08/2023 - 01/2024 | Vijayawada, India</p>
            <ul>
              <li>Hands-on training in React, JavaScript, HTML, CSS, and Node.js.</li>
              <li>Worked across Bootstrap and Tailwind CSS frontend frameworks.</li>
            </ul>
            <h3>B.Tech - EEE</h3>
            <p className="stack">Lakireddy Bali Reddy College of Engineering, 07/2023</p>
          </div>
        </section>

        <section id="skills" className="section dual-layout">
          <div className="glass-card reveal">
            <div className="section-image section-image-skills">
              <img src={skillsImage} alt="Technology skills overview" />
            </div>
            <h2 className="section-title">Skills</h2>
            <div className="tags">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div id="certifications" className="glass-card reveal">
            <div className="section-image section-image-certs">
              <img src={certificationImage} alt="Certifications and achievements" />
            </div>
            <h2 className="section-title">Certifications & Achievements</h2>
            <ul>
              <li>Rising Badge award in Mentor-Mentee Program, Maganti IT Solutions.</li>
              <li>Recognized for exemplary character and discipline.</li>
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="section contact reveal">
          <div className="section-image section-image-contact">
            <img src={contactImage} alt="Contact us" />
          </div>
          <h2 className="section-title">Let's build something great.</h2>
          <p>
            Open to frontend and full-stack opportunities. Share your requirement
            and I will deliver polished, scalable interfaces.
          </p>
          <a className="btn btn-primary" href="mailto:ajmalquadri999@gmail.com">
            Contact Me
          </a>
        </section>
      </main>

      {showScrollTop && (
        <button
          type="button"
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          style={{
            '--scroll-progress': `${scrollProgress}%`,
            '--scroll-glow': `${0.2 + scrollProgress / 125}`,
          }}
        >
          <span className="scroll-top-text">{Math.round(scrollProgress)}%</span>
        </button>
      )}
    </div>
  );
}

export default App;
