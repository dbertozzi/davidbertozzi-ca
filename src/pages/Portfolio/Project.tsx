import React, { useState } from "react";

const Project: React.FC<{
  project: {
    title: string;
    listItems: string[];
    link: string;
    images: { copy: string; src: string; label: string }[];
  };
}> = props => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const arrowNav = (dir: string) => {
    if (currentSectionIndex === 0 && dir === "backward") return;
    if (
      currentSectionIndex === props.project.images.length - 1 &&
      dir === "forward"
    )
      return;
    if (dir === "forward") setCurrentSectionIndex(prev => (prev += 1));
    if (dir === "backward") setCurrentSectionIndex(prev => (prev -= 1));
  };
  return (
    <div className="project-wrapper">
      <div className="project-content">
        <h2 title={`Project ${props.project.title}`}>{props.project.title}</h2>
        <p>{props.project.images[currentSectionIndex].copy}</p>
        <div className="project-img-wrapper">
          <img
            src={props.project.images[currentSectionIndex].src}
            alt={`project ${props.project.images[currentSectionIndex].label}`}
          />
        </div>
        <div className="project-img-nav">
          <img
            src="/nav_arrow.svg"
            alt="left arrow"
            onClick={() => {
              arrowNav("backward");
            }}
          />

          <h2 className="project-img-nav-label">
            {`0${currentSectionIndex + 1}: `}
            {props.project.images[currentSectionIndex].label}
          </h2>
          <img
            src="/nav_arrow.svg"
            alt="right arrow"
            onClick={() => {
              arrowNav("forward");
            }}
          />
        </div>

        <a
          className="project-second-section"
          href={props.project.link}
          target="_blank"
          rel="noopener noreferrer"
          title={`${props.project.title} live site or github`}
        >
          <h2 className="project-visit-site">Visit live site</h2>
        </a>
        <ul>
          {props.project.listItems.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
