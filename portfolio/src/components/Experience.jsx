import { timeline } from '../data/portfolioData';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrapper">
        <SectionHeader label="// 03 — Experience" title="Journey" />
        <div className="timeline">
          {timeline.map((item) => (
            <Reveal key={item.title} className="timeline-item">
              <div className="timeline-dot" />
              <p className="timeline-meta">{item.meta}</p>
              <h3>{item.title}</h3>
              <h4>{item.subtitle}</h4>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet.slice(0, 50)}>{bullet}</li>
                ))}
              </ul>
              {item.certificateUrl && (
                <a
                  href={item.certificateUrl}
                  className="btn btn-outline timeline-cert-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate ↗
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
