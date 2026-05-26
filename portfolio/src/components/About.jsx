import { aboutParagraphs, stats, EMAIL, RESUME_URL } from '../data/portfolioData';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <div className="about-header">
          <SectionHeader label="// 01 — About Me" title="About Me" />
        </div>
        <div className="about-grid">
          <Reveal className="about-text">
            {aboutParagraphs.map((text) => (
              <p key={text.slice(0, 40)}>{text}</p>
            ))}
            <div className="about-actions">
              <a href={`mailto:${EMAIL}`} className="btn btn-outline">
                ✉ {EMAIL}
              </a>
              <a
                href={RESUME_URL}
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                📄 Resume
              </a>
            </div>
          </Reveal>
          <Reveal className="about-stats">
            {stats.map(({ num, label }) => (
              <div key={label} className="stat-card">
                <div className="stat-num">{num}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
