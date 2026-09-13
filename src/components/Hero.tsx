import { profile } from "../data/profile";

export function Hero() {
  return (
    <section className="hero section" id="top" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Backend Software Engineer</p>
          <h1 id="hero-title">{profile.name.toUpperCase()}</h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-intro">
            7+ years of professional software engineering experience building
            backend systems, distributed services and banking / financial
            platforms, alongside independent software products.
          </p>
          <p className="stack-line" aria-label="Core technology stack">
            {profile.stackLine}
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button button-primary" href="#experience">
              View experience
            </a>
            <a className="button button-secondary" href="#work">
              View work
            </a>
          </div>
        </div>
        <aside className="hero-aside" aria-label="Professional links">
          <span>Profiles</span>
          <a href={profile.githubUrl}>GitHub</a>
          <a href={profile.linkedinUrl}>LinkedIn</a>
          <a href={profile.resumeUrl}>Resume</a>
        </aside>
      </div>
    </section>
  );
}
