import React from "react";

const Landing: React.FC = () => {
  return (
    <div className="content-wrapper">
      <h1>Contact</h1>
      <p>
        For inquiry about interesting opportunities David is available by email.
      </p>
      <p>
        <b>Email:</b> david.a.bertozzi@gmail.com
      </p>
      <a
        href="https://www.linkedin.com/in/davidbertozzi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>
          <b>LinkedIn</b>
        </p>
      </a>
      <a
        href="https://github.com/dbertozzi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>
          <b>GitHub</b>
        </p>
      </a>
    </div>
  );
};

export default Landing;
