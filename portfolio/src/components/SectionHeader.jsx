import Reveal from './Reveal';

export default function SectionHeader({ label, title }) {
  return (
    <Reveal>
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
      <div className="section-line" />
    </Reveal>
  );
}
