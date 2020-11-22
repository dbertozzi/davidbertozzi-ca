import React from "react";

const PortfolioBanner: React.FunctionComponent<{
  motivationCopy: string;
  githubURL: string;
  skills: { category: string; skill: string[] }[];
}> = ({ motivationCopy, githubURL, skills }) => {
  return (
    <div className="motivation">
      <div className="motivation-copy">{motivationCopy}</div>
      <a href={githubURL} target="_blank" rel="noopener noreferrer">
        <h3>dbertozzi GitHub</h3>
      </a>
      <div className="skills-wrapper">
        <h2>Skills</h2>
        {skills.map((skillsCategory: { category: string; skill: string[] }) => {
          return (
            <div>
              <b>{skillsCategory.category}:</b>{" "}
              {skillsCategory.skill.join(", ")}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioBanner;
