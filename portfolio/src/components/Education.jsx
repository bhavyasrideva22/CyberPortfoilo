import { education } from '../data/portfolioData';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function Education() {
  return (
    <section id="education">
      <div className="wrapper">
        <SectionHeader label="// 04 — Education" title="Academics" />
        <div className="education-grid">
          {education.map((item) => (
            <Reveal key={item.degree} className="edu-card">
              <div className="edu-card-header">
                <p className="edu-period">{item.period}</p>
                <div className="edu-score">
                  <span className="edu-score-num">{item.score}</span>
                  <span className="edu-score-label">{item.scoreLabel}</span>
                </div>
              </div>
              <h3>{item.degree}</h3>
              <p className="edu-institution">{item.institution}</p>
              <p className="edu-location">{item.location}</p>
              {item.highlights.length > 0 && (
                <ul className="edu-highlights">
                  {item.highlights.map((point) => (
                    <li key={point.slice(0, 50)}>{point}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
