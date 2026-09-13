import { useEffect, useRef, useState } from "react";
import { otherProjects } from "../data/projects";

export function OtherWork() {
  const [activeImage, setActiveImage] = useState<{
    src: string;
    alt: string;
    label: string;
  } | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const activeTriggerRef = useRef<HTMLButtonElement | null>(null);

  const closeLightbox = () => {
    const trigger = activeTriggerRef.current;

    setActiveImage(null);
    window.setTimeout(() => trigger?.focus(), 0);
  };

  useEffect(() => {
    if (!activeImage) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage]);

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
              {project.image ? (
                <button
                  className="project-card-image"
                  type="button"
                  aria-label={`Open ${project.name} preview image`}
                  onClick={(event) => {
                    activeTriggerRef.current = event.currentTarget;
                    setActiveImage({
                      src: project.image.src,
                      alt: project.image.alt,
                      label: project.name,
                    });
                  }}
                >
                  <img src={project.image.src} alt={project.image.alt} loading="lazy" />
                </button>
              ) : (
                <div className="project-card-placeholder" aria-label={project.placeholder}>
                  <span>{project.placeholder}</span>
                </div>
              )}
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

        {activeImage ? (
          <div
            className="project-image-lightbox"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-image-lightbox-title"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeLightbox();
              }
            }}
          >
            <button
              className="project-image-lightbox-close"
              type="button"
              aria-label="Close image preview"
              onClick={closeLightbox}
              ref={closeButtonRef}
            >
              ×
            </button>
            <figure className="project-image-lightbox-figure">
              <img src={activeImage.src} alt={activeImage.alt} />
              <figcaption id="project-image-lightbox-title">
                {activeImage.label}
              </figcaption>
            </figure>
          </div>
        ) : null}
      </div>
    </section>
  );
}
