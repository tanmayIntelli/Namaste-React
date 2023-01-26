import ParentClass from "./classBasedParent";
import React from "react";
const About = () => {
  return (
    <div className="about">
      <div className="about-heading">About Us</div>
      <div className="about-content">
        <ParentClass />
      </div>
    </div>
  );
};

export default About;
