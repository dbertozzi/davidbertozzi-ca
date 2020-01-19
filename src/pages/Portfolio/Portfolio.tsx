import React from "react";
import data from "./portfolioContent";
import Banner from "./PortfolioBanner";
import Project from "./Project";

const SoftwarePortfolio: React.FC = () => {
  return (
    <>
      <Banner
        githubURL={data.githubURL}
        motivationCopy={data.motivationCopy}
        skills={data.skills}
      />
      <div className="fold-line" />
      <Project project={data.ventumFit} />
    </>
  );
};

export default SoftwarePortfolio;
