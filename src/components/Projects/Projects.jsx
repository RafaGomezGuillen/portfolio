import React from "react";
import "./Projects.css";
import ProjectCard from "../Cards/ProjectCard/ProjectCard";
import { images } from "../../constants";

const Projects = () => {
  return (
    <div className="project">
      <h1>
        My Recent <label style={{ color: "#ff5277" }}>Works</label>
      </h1>
      <p>Here are a few projects I've worked on recently.</p>

      <div className="project-cards">
        <div className="project-cards-row">
          <ProjectCard
            image={images.petGenerator}
            title={"Pet Generator"}
            paragraph={
              "React TS Ionic App that consume multiple APIs to generate multiple Images, GIFS and Videos."
            }
            link={"https://github.com/RafaGomezGuillen/pet-generator"}
          />
          <ProjectCard
            image={images.formulaOne}
            title={"Formula One"}
            paragraph={
              "Formula One is a resume of the 2022 Formula One Season. You can check all statistics, charts and results of the multiple drivers and circuits of the 2022 calendar. The page was made with Blazor and Blazorise Library."
            }
            link={"https://github.com/RafaGomezGuillen/formula-one"}
          />
          <ProjectCard
            image={images.learnHowToCode}
            title={"Learn How To Code"}
            paragraph={
              "Learn How To Code is a webpage inspired in the w3schools page, in this place you can learn and practice different programming languages such as HTML, CSS, C# and SQL. The page was made with React."
            }
            link={"https://github.com/RafaGomezGuillen/learn-how-to-code/"}
          />
        </div>
        <div className="project-cards-row">
          <ProjectCard
            image={images.smoothMacth3}
            title={"Smooth Games"}
            paragraph={
              "Smooth Games is a compilation of three different games like Match 3, 2048 and Tetris; All of them combined in one place. The page was made with HTML, CSS and Javascript."
            }
            link={"https://github.com/RafaGomezGuillen/smooth-games"}
          />
          <ProjectCard
            image={images.cesarManriqueLogo}
            title={"Desarrollo de aplicaciones web"}
            paragraph={
              "It is a repository that contains all the content given in the Certificate of Higher Education (HNC) in Web App developement of the different subjects. The programming languages used are mostly C#, SQL, HTML, CSS, PAPYRUS and XML."
            }
            link={
              "https://github.com/RafaGomezGuillen/desarrollo-de-aplicaciones-web"
            }
          />
          <ProjectCard
            image={images.ullLogo}
            title={"Ingeniería Informática"}
            paragraph={
              "It is a repository that contains all the content given in the fist year of the Degree in Computer Engineering. The programming languages used are mostly C++ and MIPS ASSEMBLY."
            }
            link={"https://github.com/RafaGomezGuillen/ingenieria-informatica"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
