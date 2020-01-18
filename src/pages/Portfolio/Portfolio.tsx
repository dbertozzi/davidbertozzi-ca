import React from "react";
import data from "./portfolioContent";
import Banner from "./PortfolioBanner";

const SoftwarePortfolio: React.FC = () => {
  return (
    <>
      <Banner
        githubURL={data.githubURL}
        motivationCopy={data.motivationCopy}
        skills={data.skills}
      />
      <div className="fold-line" />
      <div className="projects-wrapper">
        <a href={data.hatchways.link} target="_blank" rel="noopener noreferrer">
          <h3>{data.hatchways.title}</h3>
        </a>
        <ul>
          {data.hatchways.listItems.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <a href={data.ventumFit.link} target="_blank" rel="noopener noreferrer">
          <h3>{data.ventumFit.title}</h3>
        </a>
        <ul>
          {data.ventumFit.listItems.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3>{data.diamondFit.title}</h3>
        <ul>
          {data.diamondFit.listItems.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3>{data.capstone.title}</h3>
        <ul>
          {data.capstone.listItems.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3>{data.hueclues.title}</h3>
        <ul>
          {data.hueclues.listItems.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SoftwarePortfolio;
