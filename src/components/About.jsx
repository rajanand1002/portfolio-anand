import { getImage } from "../imageLoader";

export default function About() {
  return (
    <section id="about">
      <span className="section-index">01 / ABOUT</span>
      <h2>About Me</h2>
      <div className="about-container">
        <div className="about-image bracket-frame">
          <img src={getImage("anand2.jpg")} alt="Anand Kumar" />
        </div>
        <div className="about-content">
          <h3>Who Am I?</h3>
          <p>
            I'm Anand Kumar, a passionate Computer Science student who enjoys
            building modern web applications and solving real-world problems
            through code.
          </p>
          <p>
            I specialize in responsive frontend development using HTML, CSS,
            JavaScript and React. Currently I'm learning Backend Development,
            Databases and the MERN Stack.
          </p>
          <p>
            My goal is to become a Software Engineer capable of building
            complete full-stack applications.
          </p>
        </div>
      </div>
    </section>
  );
}
