import React from "react";

const Landing: React.FC = () => {
  return (
    <div className="landing-wrapper">
      <div title="cover image" />

      <div>
        <h1>About</h1>
        <p>
          I am a graduate of University of Toronto with a degree in Mechanical
          Engineering specializing in Mechatronics. At CIBC, I am a Software
          Engineer developing applications for managing internal operations.
          I&apos;m a continual learner with something always on the go that
          keeps me excited about life and feeling growth. Outside of engineering
          I enjoy the outdoors and am a cycling enthusiast.
        </p>
        <img src="/landing/profile_photo.jpg" alt="david bertozzi headshot" />
      </div>
    </div>
  );
};

export default Landing;
