
import { Link } from "react-router-dom";
import "./Projects.css";

const projects = [
  {
    number: "01",
    name: "Host OF",
    category: "FILE SHARING",
    description:
      "A full-stack application for uploading and sharing files conveniently.",
    technologies: ["MERN" ,"Supabase"],
    github: "",
    demo: "https://host-of.vercel.app",
  },
  {
    number: "02",
    name: "bit data",
    category: "CLOUD STORAGE",
    description:
      "A cloud file manager for storing, organizing, and finding important documents.",
    technologies: ["React", "Express","Node.js", "Supabase"],
    github: "",
    demo: "",
  },
];

export default function Projects() {
  return (
    <main className="projects-page">
      <header className="projects-header">
        
        <p className="projects-eyebrow">PORTFOLIO / SELECTED WORK</p>
        <h1>
          Things I've <span>built.</span>
        </h1>
        <p className="projects-intro">
          A selection of applications, experiments, and ideas I've brought
          to life through code.
        </p>
      </header>

      <section className="projects-grid" aria-label="My projects">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-card-top">
              <span className="project-number">{project.number}</span>
              <span className="project-category">{project.category}</span>
            </div>

            <h2>{project.name}</h2>
            <p className="project-description">{project.description}</p>

            <div className="project-technologies">
              {project.technologies.map((technology) => (
                <span className="project-tech" key={technology}>
                  {technology}
                </span>
              ))}
            </div>

            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
              )}

              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo ↗
                </a>
              )}

              {!project.github && !project.demo && (
                <span className="project-links-placeholder">
                  Links coming soon
                </span>
              )}
            </div>
          </article>
        ))}
      </section>

      <footer className="projects-footer">
        <p>Built with curiosity. Improved with every project.</p>
        <Link to="/" className="back-link">
          ← Back to Home
       </Link>
      </footer>
    </main>
  );
}
