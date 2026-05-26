import { typingRoles, socialLinks } from '../data/portfolioData';
import { useRoleTyping } from '../hooks/useRoleTyping';
import SocialLinks from './SocialLinks';

export default function Hero() {
  const roleText = useRoleTyping(typingRoles);

  return (
    <section id="hero">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="wrapper hero-wrapper">
        <div className="hero-inner">
          <div className="hero-content">
            <p className="hero-greeting fade-up fade-up-1">Hi There, I&apos;m</p>
            <h1 className="hero-name fade-up fade-up-2">
              <span className="hero-name-gradient">Bhavya Sri Lakshmi Deva</span>
            </h1>
            <p className="hero-typing fade-up fade-up-3">
              I Am Into{' '}
              <span className="hero-typing-role">{roleText}</span>
              <span className="hero-cursor" aria-hidden="true">
                |
              </span>
            </p>
            <div className="hero-ctas fade-up fade-up-4">
              <a href="#projects" className="btn btn-gradient">
                View My Work →
              </a>
              <a href="#contact" className="btn btn-ghost">
                Get In Touch
              </a>
            </div>
            <SocialLinks links={socialLinks} className="fade-up fade-up-5" />
          </div>
          <div className="hero-photo-wrap fade-up fade-up-3">
            <img
              src="/profile.png"
              alt="Bhavya Sri Lakshmi Deva"
              className="hero-photo"
              width={320}
              height={320}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
