import React from "react";
import "./Projects.css";
import ProjectCard from "../../components/Cards/ProjectCard/ProjectCard";
import { images } from "../../constants";

const projectCards = [
  {
    image: images.symphobeats,
    title: "Symphobeats",
    paragraph:
      "A project that combines Angular and Firebase technologies to create a web and mobile application inspired by Spotify. Users can create and share their own songs, albums and playlists with other music lovers.",
    link: "https://symphobeats.com/",
    web: "Web",
  },
  {
    image: images.petGenerator,
    title: "Pet Generator",
    paragraph:
      "React TS Ionic App that consume multiple APIs to generate multiple Images, GIFS and Videos.",
    link: "https://github.com/RafaGomezGuillen/pet-generator",
    web: "Github",
  },
  {
    image: images.formulaOne,
    title: "Formula One",
    paragraph:
      "Formula One is a resume of the 2022 Formula One Season. You can check all statistics, charts and results of the multiple drivers and circuits of the 2022 calendar. The page was made with Blazor and Blazorise Library.",
    link: "https://github.com/RafaGomezGuillen/formula-one",
    web: "Github",
  },
  {
    image: images.learnHowToCode,
    title: "Learn How To Code",
    paragraph:
      "Learn How To Code is a webpage inspired in the w3schools page, in this place you can learn and practice different programming languages such as HTML, CSS, C# and SQL. The page was made with React.",
    link: "https://github.com/RafaGomezGuillen/learn-how-to-code/",
    web: "Github",
  },
  {
    image: images.smoothMacth3,
    title: "Smooth Games",
    paragraph:
      "Smooth Games is a compilation of three different games like Match 3, 2048 and Tetris; All of them combined in one place. The page was made with HTML, CSS and Javascript.",
    link: "https://github.com/RafaGomezGuillen/smooth-games",
    web: "Github",
  },
  {
    image: images.cesarManriqueLogo,
    title: "Desarrollo de aplicaciones web",
    paragraph:
      "It is a repository that contains all the content given in the Certificate of Higher Education (HNC) in Web App developement of the different subjects.",
    link: "https://github.com/RafaGomezGuillen/desarrollo-de-aplicaciones-web",
    web: "Github",
  },
];

const Projects = () => {
  return (
    <div className="project">
      <h1>
        My Recent <label style={{ color: "#ff5277" }}>Projects</label>
      </h1>
      <p>
        You can check the source code on my{" "}
        <a
          href="https://github.com/RafaGomezGuillen/"
          title="Go to Rafael Gómez GitHub profile page"
          target="_blank"
        >
          GitHub
        </a>
        .
      </p>

      <div className="project-cards">
        {projectCards.map((porject, index) => (
          <ProjectCard
            image={images.symphobeats}
            title={"Symphobeats"}
            paragraph={
              "A project that combines Angular and Firebase technologies to create a web and mobile application inspired by Spotify. Users can create and share their own songs, albums and playlists with other music lovers."
            }
            link={"https://symphobeats.com/"}
            web={"Web"}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
