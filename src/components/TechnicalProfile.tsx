import { skillGroups } from "../data/skills";

export function TechnicalProfile() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Technical profile</p>
            <h2 id="skills-title">Systems-oriented engineering stack.</h2>
          </div>
          <p>
            Technologies are grouped by how they are applied in backend product
            work, delivery and operational ownership.
          </p>
        </div>

        <div className="skill-grid">
          {skillGroups.map((group) => (
            <SkillGroup key={group.title} title={group.title} items={group.items} />
          ))}
        </div>
      </div>
    </section>
  );
}

type SkillGroupProps = {
  title: string;
  items: string[];
};

function SkillGroup({ title, items }: SkillGroupProps) {
  const headingId = `skill-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <section className="skill-group" aria-labelledby={headingId}>
      <h3 id={headingId}>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
