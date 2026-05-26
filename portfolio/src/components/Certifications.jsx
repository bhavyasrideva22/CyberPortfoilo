import { certifications } from '../data/portfolioData';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="wrapper">
        <SectionHeader label="// 06 — Certifications & Training" title="Credentials" />
        <div className="certs-grid">
          {certifications.map((cert) => (
            <Reveal key={cert.title} className="cert-card">
              <div className="cert-icon">{cert.icon}</div>
              <div>
                <h3>{cert.title}</h3>
                <p>{cert.detail}</p>
                {cert.certificateUrl && (
                  <a
                    href={cert.certificateUrl}
                    className="cert-view-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate ↗
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
