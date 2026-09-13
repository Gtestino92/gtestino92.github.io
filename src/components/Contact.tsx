import { profile } from "../data/profile";

export function Contact() {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container contact-panel">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Open to backend engineering opportunities.</h2>
        </div>
        <p>
          Interested in backend systems, distributed services, financial
          technology and product engineering roles where reliability and clear
          technical ownership matter.
        </p>
        <div className="contact-links" aria-label="Contact links">
          <a href={profile.emailUrl}>Email</a>
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
