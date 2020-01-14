import React from "react";
import { css } from "emotion";

const Landing: React.FC = () => {
  return (
    <div
      className={css`
        padding-left: 2em;
        padding-right: 2em;
      `}
    >
      <h1>David Bertozzi</h1>
      <h3>Engineer</h3>
      <p>
        David is a graduate of University of Toronto with a degree in Mechanical
        Engineering specializing in stream options of Mechatronics and Heat and
        Mass Transfer. He has been working as an engineering consultant
        specializing in bicycle design and managing product development. David
        is a continual learner with something always on his plate and aspires to
        push limits as an engineer and in extracurricular activities through
        dedication and consistency. Outside of engineering David plans
        wilderness backpacking trips and is a cycling enthusiast.
      </p>
    </div>
  );
};

export default Landing;
