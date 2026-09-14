import { experiences } from "../data/experience";

export function Experience() {
  return (
    <section className="section professional-section" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Professional experience</p>
          <h2 id="experience-title">Backend systems in production.</h2>
        </div>

        <div className="experience-list">
          {experiences.map((experience) => (
            <article
              className={experience.featured ? "experience-card featured" : "experience-card"}
              key={experience.company}
            >
              <div className="experience-meta">
                <h3>{experience.company}</h3>
                <p>{experience.role}</p>
                <time>{experience.period}</time>
              </div>
              <div className="experience-body">
                <p className="lead">{experience.description}</p>

                {experience.highlights ? (
                  <div className="achievement-grid" aria-label="Selected achievements">
                    {experience.highlights.map((highlight) => (
                      <div className="achievement" key={highlight.title}>
                        <strong>{highlight.metric}</strong>
                        <span>{highlight.title}</span>
                        <p>{highlight.context}</p>
                      </div>
                    ))}
                  </div>
                ) : null}

                {experience.points ? (
                  <ul className="compact-list">
                    {experience.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}

                {experience.environment ? (
                  <p className="environment">
                    <span>Engineering environment:</span>{" "}
                    {experience.environment
                      .replace(/\.$/, "")
                      .split(", ")
                      .map((item) => (
                        <span className="environment-skill" key={item}>
                          {item}
                        </span>
                      ))}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
