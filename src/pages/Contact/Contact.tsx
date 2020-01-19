import React from "react";

const Landing: React.FC = () => {
  return (
    <div className="contact-wrapper">
      <div title="cover image" />
      <div>
        <h1>Contact</h1>
        <p>
          For inquiry about interesting opportunities I am available by email.
        </p>
        <p>
          <strong>Email:</strong> david.a.bertozzi@gmail.com
        </p>
        <a
          href="https://www.linkedin.com/in/davidbertozzi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            <strong>LinkedIn</strong>
          </p>
        </a>
        <a
          href="https://github.com/dbertozzi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            <strong>GitHub</strong>
          </p>
        </a>
      </div>
    </div>
  );
};

export default Landing;
