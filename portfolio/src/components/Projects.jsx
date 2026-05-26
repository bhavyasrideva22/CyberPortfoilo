import { projects } from '../data/portfolioData';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import TagList from './TagList';

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrapper">
        <SectionHeader label="// 05 — Projects" title="Work" />
        <div className="projects-grid">
          {projects.map((project) => (
            <Reveal key={project.num} className="project-card">
              <p className="project-num">{project.num}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <TagList tags={project.tags} />
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  className="btn btn-outline project-demo-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo ↗
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
