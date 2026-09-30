import { useState } from "react";
import { projects } from "../data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [modalProject, setModalProject] = useState(null);

  function openModal(title) {
    const project = projects.find((p) => p.title === title);
    setModalProject(project || null);
  }

  function closeModal() {
    setModalProject(null);
  }

  return (
    <section id="projects">
      <span className="section-index">03 / PROJECTS</span>
      <h2>Selected Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            onOpenModal={openModal}
          />
        ))}
      </div>

      <div id="project-modal" className={modalProject ? "open" : ""} onClick={closeModal}>
        <div className="modal-content case-study" onClick={(e) => e.stopPropagation()}>
          <span className="close-btn" onClick={closeModal}>
            &times;
          </span>

          {modalProject && (
            <>
              <h2 id="modal-title">{modalProject.title}</h2>
              <p className="case-study-tech">{modalProject.tech}</p>

              <div className="case-study-block">
                <h4>Problem</h4>
                <p>{modalProject.problem}</p>
              </div>

              <div className="case-study-block">
                <h4>Approach</h4>
                <p>{modalProject.approach}</p>
              </div>

              <div className="case-study-block">
                <h4>Challenges</h4>
                <p>{modalProject.challenges}</p>
              </div>

              <div className="case-study-block">
                <h4>What I'd improve</h4>
                <p>{modalProject.improve}</p>
              </div>

              <div className="case-study-actions">
                <a
                  href={modalProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn primary-btn small-btn"
                >
                  Live Demo
                </a>
                {modalProject.github && (
                  <a
                    href={modalProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn outline-btn small-btn"
                  >
                    View Code
                  </a>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
