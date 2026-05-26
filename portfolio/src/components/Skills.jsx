import { skills, softSkills } from '../data/portfolioData';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import TagList from './TagList';

function SkillGrid({ items }) {
  return (
    <div className="skills-grid">
      {items.map((skill) => (
        <Reveal key={skill.title} className="skill-card">
          <div className="skill-icon">{skill.icon}</div>
          <h3>{skill.title}</h3>
          <TagList tags={skill.tags} />
        </Reveal>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrapper">
        <SectionHeader label="// 02 — Technical Skills" title="Arsenal" />
        <SkillGrid items={skills} />

        <div className="skills-subsection">
          <Reveal className="skills-subheader">
            <p className="section-label">// Soft Skills</p>
            <h3 className="skills-subtitle">Professional Strengths</h3>
            <div className="section-line" />
          </Reveal>
          <SkillGrid items={softSkills} />
        </div>
      </div>
    </section>
  );
}
