import { profile } from "../data/profile";

export function Hero() {
  return (
    <section className="hero section" id="top" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Backend Software Engineer</p>
          <h1 id="hero-title">{profile.name}</h1>
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
          <div className="hero-profile-links" aria-label="Professional links">
            <a href={profile.githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
        </div>
        <aside className="hero-signal" aria-label="Professional profile summary">
          <div className="hero-mascot-card">
            <img
              src="/mascot/gt-dark-space-lord-mascot.png"
              alt="GT dark space lord portfolio mascot"
            />
          </div>
          <div>
            <strong>7+ years</strong>
            <span>Software engineering</span>
          </div>
          <div>
            <strong>4+ years</strong>
            <span>Santander</span>
          </div>
          <div>
            <strong>Backend · Distributed Systems</strong>
            <span>Java · Kotlin · Spring</span>
          </div>
          <div>
            <strong>Buenos Aires · Remote</strong>
          </div>
        </aside>
      </div>
    </section>
  );
}
