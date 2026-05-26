import { navLinks } from '../data/portfolioData';
import ThemeToggle from './ThemeToggle';

export default function Nav() {
  return (
    <nav>
      <div className="nav-logo">BSLD::SECURITY</div>
      <div className="nav-right">
        <ul className="nav-links">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
}
