import React from "react";
import { css } from "emotion";
import data from "./softwarePortfolioContent";

const SoftwarePortfolio: React.FC = () => {
  return (
    <div
      className={css`
        padding-left: 2em;
        padding-right: 2em;
      `}
    >
      <div
        className={css`
          display: flex;
          justify-content: center;
        `}
      >
        <a
          href="https://github.com/dbertozzi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Visit David's GitHub</h2>
        </a>
      </div>

      <div>
        <b>{data.skills.title}:</b> {data.skills.listItems.join(", ")}
      </div>

      <div>
        {data.introduction.map(p => {
          return (
            <>
              <h4>{p.title}</h4>
              <p>{p.content}</p>
            </>
          );
        })}
      </div>

      <a href={data.hatchways.link} target="_blank" rel="noopener noreferrer">
        <h3>{data.hatchways.title}</h3>
      </a>
      <ul>
        {data.hatchways.listItems.map(item => (
          <li>{item}</li>
        ))}
      </ul>

      <a href={data.ventumFit.link} target="_blank" rel="noopener noreferrer">
        <h3>{data.ventumFit.title}</h3>
      </a>
      <ul>
        {data.ventumFit.listItems.map(item => (
          <li>{item}</li>
        ))}
      </ul>

      <h3>{data.diamondFit.title}</h3>
      <ul>
        {data.diamondFit.listItems.map(item => (
          <li>{item}</li>
        ))}
      </ul>

      <h3>{data.capstone.title}</h3>
      <ul>
        {data.capstone.listItems.map(item => (
          <li>{item}</li>
        ))}
      </ul>

      <h3>{data.hueclues.title}</h3>
      <ul>
        {data.hueclues.listItems.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SoftwarePortfolio;
