import { resumeUrl } from "../data";

export default function Resume() {
  return (
    <section id="resume" className="resume">
      <span className="section-index">04 / RESUME</span>
      <h2>Preview Resume</h2>
      <p className="resume-text">View my resume for detailed information.</p>
      <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn primary-btn">
        View Resume
      </a>
    </section>
  );
}
