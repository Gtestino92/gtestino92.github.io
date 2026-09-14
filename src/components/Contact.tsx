import { profile } from "../data/profile";

export function Contact() {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container contact-panel">
        <div className="contact-copy">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Get in touch.</h2>
          <p>
            Open to backend engineering opportunities, particularly backend and
            distributed systems roles.
          </p>
        </div>
        <div className="contact-links" aria-label="Contact links">
          <a href={profile.emailUrl}>gtestino1992@gmail.com</a>
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
