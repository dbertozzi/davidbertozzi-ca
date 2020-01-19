import React from "react";
import data from "./portfolioContent";
import Banner from "./PortfolioBanner";
import Project from "./Project";
import HatchwaysProject from "./HatchwaysProject";

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
      <div className="fold-line" />
      <HatchwaysProject project={data.hatchways} />
    </>
  );
};

export default SoftwarePortfolio;
