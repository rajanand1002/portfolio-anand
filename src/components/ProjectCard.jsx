import { useRef } from "react";
import { getImage } from "../imageLoader";

export default function ProjectCard({ project, index, onOpenModal }) {
  const cardRef = useRef(null);

  function handleMouseMove(e) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -(y - centerY) / 16;
    const rotateY = (x - centerX) / 16;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
  }

  function handleMouseLeave() {
    const card = cardRef.current;
    if (card) card.style.transform = "rotateX(0) rotateY(0) translateY(0) scale(1)";
  }

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-link"
    >
      <div
        className="project-card"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => {
          e.preventDefault();
          onOpenModal(project.title);
        }}
      >
        <img src={getImage(project.image)} alt={project.title} />
        <div className="project-info">
          <span className="project-index">
            FIG {String(index + 1).padStart(2, "0")}
          </span>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <span className="project-tech">{project.tech}</span>
        </div>
      </div>
    </a>
  );
}
