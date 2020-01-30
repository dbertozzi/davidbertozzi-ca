import React from "react";

const PortfolioBanner: React.FunctionComponent<{
  motivationCopy: string;
  githubURL: string;
  skills: {
    technical: { title: string; listItems: string[] };
    design: { title: string; listItems: string[] };
  };
}> = ({ motivationCopy, githubURL, skills }) => {
  return (
    <div className="motivation">
      <div className="motivation-copy">{motivationCopy}</div>
      <a href={githubURL} target="_blank" rel="noopener noreferrer">
        <h3>dbertozzi GitHub</h3>
      </a>
      <div className="skills-wrapper">
        <h2>Skills</h2>
        <div>
          <b>{skills.technical.title}:</b>{" "}
          {skills.technical.listItems.join(", ")}
        </div>
        <div>
          <b>{skills.design.title}:</b> {skills.design.listItems.join(", ")}
        </div>
      </div>
    </div>
  );
};

export default PortfolioBanner;
