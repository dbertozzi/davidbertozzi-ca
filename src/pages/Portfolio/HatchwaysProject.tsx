import React from "react";

const SoftwarePortfolio: React.FC<{
  project: {
    title: string;
    listItems: string[];
    link: string;
    description: string;
  };
}> = ({ project }) => {
  return (
    <div className="hatchways-wrapper">
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
        title={`${project.title} GitHub`}
      >
        <h2>Visit project GitHub</h2>
      </a>
    </div>
  );
};

export default SoftwarePortfolio;
