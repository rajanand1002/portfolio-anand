import { journey } from "../data";

export default function Journey() {
  return (
    <section id="journey">
      <span className="section-index">— / JOURNEY</span>
      <h2>My Journey</h2>
      <div className="timeline">
        {journey.map((step, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">{step.date}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
