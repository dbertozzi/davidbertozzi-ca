import React, { useState } from "react";

const Project: React.FC<{
  project: {
    title: string;
    listItems: string[];
    link: string;
    images: { copy: string; src: string; label: string }[];
  };
}> = ({ project }) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const arrowNav = (dir: string): void => {
    if (currentSectionIndex === 0 && dir === "backward") return;
    if (currentSectionIndex === project.images.length - 1 && dir === "forward")
      return;
    if (dir === "forward") {
      setCurrentSectionIndex(prev => {
        return prev + 1;
      });
    }
    if (dir === "backward")
      setCurrentSectionIndex(prev => {
        return prev - 1;
      });
  };
  return (
    <div className="project-wrapper">
      <h2 title={`Project ${project.title}`}>{project.title}</h2>
      <p>{project.images[currentSectionIndex].copy}</p>
      <div className="project-img-wrapper">
        <img
          src={project.images[currentSectionIndex].src}
          alt={`project ${project.images[currentSectionIndex].label}`}
        />
      </div>
      <div className="project-img-nav">
        <button
          onClick={(): void => {
            arrowNav("backward");
          }}
          aria-label="navigate to previous content"
          type="button"
        />
        <h2 className="project-img-nav-label">
          {`0${currentSectionIndex + 1}: `}
          {project.images[currentSectionIndex].label}
        </h2>
        <button
          onClick={(): void => {
            arrowNav("forward");
          }}
          aria-label="navigate to next content"
          type="button"
        />
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        title={`${project.title} live site`}
      >
        <h2>Visit live site</h2>
      </a>
      <ul>
        {project.listItems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
