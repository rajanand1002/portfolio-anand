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
            I'm Anand Kumar, a Computer Science student passionate about
            building modern web applications and solving real-world problems
            through code.
          </p>
          <p>
            I have hands-on experience with HTML, CSS, JavaScript, React.js, and
            Vite. Currently, I'm expanding my skills in backend development with
            Node.js, Express.js, and MongoDB while strengthening my
            problem-solving skills through Java and DSA.
          </p>
          <p>
            My goal is to become a skilled Software Developer, build impactful
            full-stack applications, and continuously grow as a developer.
          </p>
        </div>
      </div>
    </section>
  );
}
