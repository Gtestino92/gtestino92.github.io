import { realsProject } from "../data/projects";

export function RealsProject() {
  return (
    <section className="section selected-work" id="work" aria-labelledby="work-title">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow" id="work-title">Selected work</p>
        </div>

        <article className="reals-panel">
          <div className="reals-content">
            <p className="project-label">{realsProject.label}</p>
            <h3>{realsProject.name}</h3>
            <p className="lead">{realsProject.description}</p>
            <p className="project-status">{realsProject.status}</p>
            <p className="project-flow">
              Search for a compatible chat, start text-first, reveal the next
              step, then coordinate a second chat.
            </p>

            <div className="stack-list" aria-label="Reals technology stack">
              {realsProject.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="project-links">
              {realsProject.links.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="reals-visuals">
            <div className="reals-flow-screenshots" aria-label="Reals core product flow screenshots">
              {realsProject.productScreenshots.map((screenshot) => (
                <figure
                  className={`reals-screenshot${screenshot.primary ? " primary" : ""}`}
                  key={screenshot.src}
                >
                  <img src={screenshot.src} alt={screenshot.alt} loading="lazy" />
                  <figcaption>{screenshot.label}</figcaption>
                </figure>
              ))}
            </div>

            <figure className="reals-auth-screen">
              <img
                src={realsProject.authScreenshot.src}
                alt={realsProject.authScreenshot.alt}
                loading="lazy"
              />
              <figcaption>
                <span>{realsProject.authScreenshot.label}</span>
                {realsProject.authScreenshot.caption}
              </figcaption>
            </figure>
          </div>
        </article>

        <div className="project-highlight-grid">
          {realsProject.highlights.map((highlight) => (
            <article className="project-highlight" key={highlight.title}>
              <h3>{highlight.title}</h3>
              <p>{highlight.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
