import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <span className="section-index">02 / SKILLS</span>
      <h2>Technical Skills</h2>

      <div className="skills-table">
        {skills.map((group) => (
          <div className="skills-group" key={group.group}>
            <h4>{group.group}</h4>
            <div className="skill-list">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
