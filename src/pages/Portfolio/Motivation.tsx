import React from "react";

const Motivation: React.FunctionComponent<{
  motivationCopy: string;
  githubURL: string;
}> = props => {
  return (
    <div className="motivation">
      <div>{props.motivationCopy}</div>
      <a
        href="https://github.com/dbertozzi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>dbertozzi GitHub</h3>
      </a>
    </div>
  );
};

export default Motivation;
