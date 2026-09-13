import { otherProjects } from "../data/projects";

export function OtherWork() {
  return (
    <section className="section other-work" aria-labelledby="other-work-title">
      <div className="container">
        <div className="section-heading compact-heading">
          <p className="eyebrow">Other work</p>
          <h2 id="other-work-title">Other selected work.</h2>
        </div>

        <div className="other-work-grid">
          {otherProjects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-card-placeholder" aria-label={project.placeholder}>
                <span>{project.placeholder}</span>
              </div>
              <div className="project-card-body">
                {project.eyebrow ? <p className="project-label">{project.eyebrow}</p> : null}
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p className="project-details">{project.details}</p>
                <p className="project-stack">{project.stack}</p>
                {project.links?.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
