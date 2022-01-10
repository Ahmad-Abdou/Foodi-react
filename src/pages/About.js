import React from "react";
import "../styles/About.css";
import Navigationbar from "../components/Navigationbar";
const About = () => {
  return (
    <>
      <div className="about-container">
        <Navigationbar></Navigationbar>
        <div className="grid-about-1"></div>
        <div className="grid-about-2">
          <p className="about-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            inventore aspernatur quidem, cumque molestiae perspiciatis error
            consectetur? Quaerat modi voluptatibus obcaecati, repudiandae itaque
            corrupti est, dolor, maxime id dolore eligendi.
          </p>
          <p className="about-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dicta
            quo eaque laborum officia nulla, dolorum accusantium neque
            recusandae eligendi veritatis ut deleniti maiores odit adipisci
            obcaecati cupiditate facere? Voluptate.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
