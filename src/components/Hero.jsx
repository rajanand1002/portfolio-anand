import { useEffect, useState } from "react";
import { typingWords, socials } from "../data";
import { getImage } from "../imageLoader";
import { smoothScrollTo } from "../utils/smoothScroll";

export default function Hero() {
  const [typedText, setTypedText] = useState("");

  // Typing effect (mirrors original script.js loop with setTimeout)
  useEffect(() => {
    let i = 0;
    let j = 0;
    let deleting = false;
    let timeoutId;

    function type() {
      const word = typingWords[i];
      j = deleting ? j - 1 : j + 1;
      setTypedText(word.slice(0, j));

      if (!deleting && j === word.length) {
        timeoutId = setTimeout(() => {
          deleting = true;
          timeoutId = setTimeout(type, 60);
        }, 1200);
        return;
      } else if (deleting && j === 0) {
        deleting = false;
        i = (i + 1) % typingWords.length;
      }

      timeoutId = setTimeout(type, deleting ? 60 : 100);
    }

    type();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-text-block">
        <span className="hero-tag">// AVAILABLE FOR OPPORTUNITIES</span>
        <h1 className="hero-name">Anand Kumar</h1>
        <h2 className="hero-subtitle">
          Web Developer <span>— MERN Stack Learner</span>
        </h2>
        <p className="typing-text">{typedText}</p>

        <div className="hero-cta">
          <a
            href="#projects"
            className="btn primary-btn"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("#projects");
            }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="btn outline-btn"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("#contact");
            }}
          >
            Hire Me
          </a>
        </div>

        <div className="social-links">
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href={socials.github} target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </div>

      <div className="hero-pic-wrap bracket-frame">
        <img src={getImage("anand3.jpg")} className="hero-pic" alt="Anand Kumar" />
      </div>
    </section>
  );
}
