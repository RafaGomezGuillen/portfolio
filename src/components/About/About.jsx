import React from "react";
import "./About.css";
import { images } from "../../constants";
import {
  FaReact,
  FaWindows,
  FaGithub,
} from "react-icons/fa";
import {
  SiCsharp,
  SiDotnet,
  SiMicrosoftsqlserver,
  SiIonic,
  SiVisualstudio,
  SiVisualstudiocode,
  SiMicrosoftazure,
  SiTypescript,
  SiAngular,
  SiFirebase
} from "react-icons/si";
import SkillsetCard from "../Cards/SkillsetCard/SkillsetCard";

const About = () => {
  return (
    <>
      <div className="about-presentation">
        <h1>Hello there.</h1>
        <div className="about-presentation-row">
          <div className="about-presentation-col">
            <img src={images.rafaGomez} alt="Rafael Gómez" />
          </div>
          <div className="about-presentation-col">
            <p>
              I am <span style={{ color: "#43a9a3" }}>Rafael Gómez</span>, a web
              developer student based in Tenerife, Spain.
              <br />
              <br />
              Since the last year, I have gained experience in building
              responsive websites, implementing interactive features and
              solutions with different technologies.
              <br />
              <br />
              My <span style={{ color: "#43a9a3" }}>goal</span>, is to
              contribute to the ever-evolving field of web development,
              leveraging my technical expertise to deliver impactful solutions
              that meet user needs and exceed expectations.
            </p>
          </div>
        </div>
      </div>

      <div className="technologie-cards">
        <h1>
          I have <span style={{ color: "#ff5277" }}>Worked</span> with
        </h1>
        <div className="technologie-cards-row">
          <SkillsetCard icon={SiAngular} />
          <SkillsetCard icon={FaReact} />
          <SkillsetCard icon={SiIonic} />
          <SkillsetCard icon={SiFirebase} />
        </div>
        <div className="technologie-cards-row">
          <SkillsetCard icon={SiDotnet} />
          <SkillsetCard icon={SiCsharp} />
          <SkillsetCard icon={SiTypescript} />
          <SkillsetCard icon={SiMicrosoftsqlserver} />
        </div>
      </div>

      <br />

      <div className="technologie-cards">
        <h1>
          <span style={{ color: "#ff5277" }}>Tools</span> I use
        </h1>
        <div className="technologie-cards-row">
          <SkillsetCard icon={SiVisualstudio} />
          <SkillsetCard icon={SiVisualstudiocode} />
          <SkillsetCard icon={FaWindows} />
          <SkillsetCard icon={FaGithub} />
        </div>
        <div className="technologie-cards-row">
          <SkillsetCard icon={SiMicrosoftazure} />
        </div>
      </div>
    </>
  );
};

export default About;
