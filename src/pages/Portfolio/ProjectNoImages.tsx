import React from "react";

const ProjectNoImages: React.FC<{
  project: {
    title: string;
    listItems: string[];
    link: string;
    linkTitle: string;
    description: string;
    path: string;
  };
}> = ({ project }) => {
  return (
    <div className="project-no-images-wrapper">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <ul>
        {project.listItems.map((item: string) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        title={`${project.title} Link`}
      >
        <h2>{project.linkTitle}</h2>
      </a>
    </div>
  );
};

export default ProjectNoImages;
