import { useEffect, useRef, useState } from "react";
import { realsProject } from "../data/projects";

export function RealsProject() {
  const galleryScreenshots = [
    ...realsProject.productScreenshots,
    realsProject.authScreenshot,
  ];
  const authScreenshotIndex = realsProject.productScreenshots.length;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const screenshotTriggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeScreenshot =
    activeIndex === null ? null : galleryScreenshots[activeIndex];

  const closeLightbox = () => {
    const trigger =
      activeIndex === null ? null : screenshotTriggerRefs.current[activeIndex];

    setActiveIndex(null);
    window.setTimeout(() => trigger?.focus(), 0);
  };

  const showPreviousScreenshot = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === null
        ? currentIndex
        : (currentIndex - 1 + galleryScreenshots.length) %
          galleryScreenshots.length,
    );
  };

  const showNextScreenshot = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === null
        ? currentIndex
        : (currentIndex + 1) % galleryScreenshots.length,
    );
  };

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPreviousScreenshot();
      }

      if (event.key === "ArrowRight") {
        showNextScreenshot();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

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
              {realsProject.productScreenshots.map((screenshot, index) => (
                <figure
                  className={`reals-screenshot${screenshot.primary ? " primary" : ""}`}
                  key={screenshot.src}
                >
                  <button
                    className="reals-screenshot-trigger"
                    type="button"
                    aria-label={`Open ${screenshot.label} screenshot`}
                    onClick={() => setActiveIndex(index)}
                    ref={(element) => {
                      screenshotTriggerRefs.current[index] = element;
                    }}
                  >
                    <img src={screenshot.src} alt={screenshot.alt} loading="lazy" />
                  </button>
                  <figcaption>{screenshot.label}</figcaption>
                </figure>
              ))}
            </div>

            <figure className="reals-auth-screen">
              <button
                className="reals-screenshot-trigger"
                type="button"
                aria-label={`Open ${realsProject.authScreenshot.label} screenshot`}
                onClick={() => setActiveIndex(authScreenshotIndex)}
                ref={(element) => {
                  screenshotTriggerRefs.current[authScreenshotIndex] = element;
                }}
              >
                <img
                  src={realsProject.authScreenshot.src}
                  alt={realsProject.authScreenshot.alt}
                  loading="lazy"
                />
              </button>
              <figcaption>
                <span>{realsProject.authScreenshot.label}</span>
                {realsProject.authScreenshot.caption}
              </figcaption>
            </figure>
          </div>
        </article>

        {activeScreenshot ? (
          <div
            className="reals-lightbox"
            role="dialog"
            aria-modal="true"
            aria-labelledby="reals-lightbox-title"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeLightbox();
              }
            }}
          >
            <button
              className="reals-lightbox-close"
              type="button"
              aria-label="Close screenshot preview"
              onClick={closeLightbox}
              ref={closeButtonRef}
            >
              ×
            </button>

            <button
              className="reals-lightbox-nav previous"
              type="button"
              aria-label="View previous Reals screenshot"
              onClick={showPreviousScreenshot}
            >
              ‹
            </button>

            <figure className="reals-lightbox-figure">
              <img src={activeScreenshot.src} alt={activeScreenshot.alt} />
              <figcaption id="reals-lightbox-title">
                {activeScreenshot.label}
              </figcaption>
            </figure>

            <button
              className="reals-lightbox-nav next"
              type="button"
              aria-label="View next Reals screenshot"
              onClick={showNextScreenshot}
            >
              ›
            </button>
          </div>
        ) : null}

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
