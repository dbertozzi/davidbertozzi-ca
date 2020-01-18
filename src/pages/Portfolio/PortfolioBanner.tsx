import React from "react";
import Motivation from "./Motivation";

const PortfolioBanner: React.FunctionComponent<{
  motivationCopy: string;
  githubURL: string;
  skills: {
    technical: { title: string; listItems: string[] };
    design: { title: string; listItems: string[] };
  };
}> = props => {
  let bannerNavItems: { label: string; path: string; class: string }[] = [
    { label: "Motivation", path: "/motivation", class: "" }
  ];
  return (
    <div className="portfolio-banner-wrapper">
      <Motivation
        motivationCopy={props.motivationCopy}
        githubURL={props.githubURL}
      />
      <div className="skills-wrapper">
        <h2>Skills</h2>
        <div>
          <b>{props.skills.technical.title}:</b>{" "}
          {props.skills.technical.listItems.join(", ")}
        </div>
        <div>
          <b>{props.skills.design.title}:</b>{" "}
          {props.skills.design.listItems.join(", ")}
        </div>
      </div>
    </div>
  );
};

export default PortfolioBanner;
