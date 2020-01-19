import React from "react";

const Landing: React.FC = () => {
  return (
    <div className="landing-wrapper">
      <div title="cover image" />
      <h1>About</h1>
      <p>
        David is a graduate of University of Toronto with a degree in Mechanical
        Engineering specializing in stream options of Mechatronics and Heat and
        Mass Transfer. He has been working as an engineering consultant
        specializing in bicycle design and managing product development. David
        is a continual learner with something always on his plate and aspires to
        push limits as an engineer and in extracurricular activities through
        dedication and consistency. Outside of engineering David loves the
        outdoors and is a cycling enthusiast.
      </p>
      <img src="/landing/profile_photo.jpg" alt="david bertozzi headshot" />
    </div>
  );
};

export default Landing;
