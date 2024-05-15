import React from "react";
import "./Projects.css";
import ProjectCard from "../../components/Cards/ProjectCard/ProjectCard";
import { images } from "../../constants";

const experienceCards = [
  {
    image:
      "https://media.licdn.com/dms/image/D4D0BAQF6AZNy3nZ6RQ/company-logo_200_200/0/1664379060316/vivadrive_logo?e=1723680000&v=beta&t=L7y4nD39nNGDgKjF4DIJtNrslEJlWoSDcGOxM3sCRP4",
    title: "Full Stack Developer at VivaDrive",
    paragraph: `
    - I designed and created a website with city and country recommendations from scratch. Used React JS for the UI, Tailwind CSS for the layout, and Django Rest Framework for the backend.
    
    - I was responsible for the implementation of recommendations from point A to B using React Leaflet. This system was based on parameters such as geographical coordinates and electric vehicle battery percentage, with the aim of providing an efficient and accurate solution to guide users optimally.
    
    - Contributed to improving SEO, performance, and accessibility on vivadrive.io, as well as fixing visual issues and fixing bugs.
  `,
    links: [
      {
        title: "https://vivadrive.io/",
        type: "Web",
      },
    ],
  },
  {
    image:
      "https://camo.githubusercontent.com/2a88c5be1b91518a258880465e77992e84dda79f228c7398968f681a0f3aa54a/68747470733a2f2f63616e6172696173736b696c6c732e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032342f30322f42414e4e45522d484f4d452d4d494e4032782e706e67",
    title: "First Position at Canarias Skills Web App Development module",
    paragraph: `On February 28th and 29th, I had the opportunity to participate and win first place in the Canarias Skills representing CIFP Cesar Manrique in the Web Development module.
    
    It was a challenge that involved creating a website in 7 hours, focusing on backend, frontend, accessibility, scalability, and deployment. Additionally, we had to present our work. In my case, I used Angular for the frontend and ASP .NET Core for the backend.
  `,
    links: [
      {
        title: "https://canariasskills.com/",
        type: "Web",
      },
      {
        title: "https://github.com/RafaGomezGuillen/canarias-skills-2024",
        type: "GitHub",
      },
    ],
  },
];

const projectCards = [
  {
    image: images.symphobeats,
    title: "Symphobeats",
    paragraph:
      "A project that combines Angular and Firebase technologies to create a web and mobile application inspired by Spotify. Users can create and share their own songs, albums and playlists with other music lovers.",
    links: [
      {
        title: "https://symphobeats.com/",
        type: "Web",
      },
    ],
  },
  {
    image: images.petGenerator,
    title: "Pet Generator",
    paragraph:
      "React TS Ionic App that consume multiple APIs to generate multiple Images, GIFS and Videos.",

    links: [
      {
        title: "https://rafagomezguillen.github.io/pet-generator/",
        type: "Web",
      },
      {
        title: "https://github.com/RafaGomezGuillen/pet-generator",
        type: "GitHub",
      },
    ],
  },
  {
    image: images.formulaOne,
    title: "Formula One",
    paragraph:
      "Formula One is a resume of the 2022 Formula One Season. You can check all statistics, charts and results of the multiple drivers and circuits of the 2022 calendar. The page was made with Blazor and Blazorise Library.",

    links: [
      {
        title: "https://happy-hill-02e3b9703.3.azurestaticapps.net/",
        type: "Web",
      },
      {
        title: "https://github.com/RafaGomezGuillen/formula-one",
        type: "GitHub",
      },
    ],
  },
  {
    image: images.learnHowToCode,
    title: "Learn How To Code",
    paragraph:
      "Learn How To Code is a webpage inspired in the w3schools page, in this place you can learn and practice different programming languages such as HTML, CSS, C# and SQL. The page was made with React.",
    links: [
      {
        title: "https://rafagomezguillen.github.io/learn-how-to-code/",
        type: "Web",
      },
      {
        title: "https://github.com/RafaGomezGuillen/learn-how-to-code/",
        type: "GitHub",
      },
    ],
  },
  {
    image: images.smoothMacth3,
    title: "Smooth Games",
    paragraph:
      "Smooth Games is a compilation of three different games like Match 3, 2048 and Tetris; All of them combined in one place. The page was made with HTML, CSS and Javascript.",
    links: [
      {
        title: "https://rafagomezguillen.github.io/smooth-games/",
        type: "Web",
      },
      {
        title: "https://github.com/RafaGomezGuillen/smooth-games",
        type: "GitHub",
      },
    ],
  },
  {
    image: images.cesarManriqueLogo,
    title: "Desarrollo de aplicaciones web",
    paragraph:
      "It is a repository that contains all the content given in the Certificate of Higher Education (HNC) in Web App developement of the different subjects.",
    links: [
      {
        title:
          "https://github.com/RafaGomezGuillen/desarrollo-de-aplicaciones-web",
        type: "GitHub",
      },
    ],
  },
];

const Projects = () => {
  return (
    <div className="project">
      <h1>
        Gained <label style={{ color: "#ff5277" }}>experience</label>
      </h1>

      <div className="project-cards">
        {experienceCards.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            paragraph={project.paragraph}
            links={project.links}
            web={project.web}
          />
        ))}
      </div>

      <h2 style={{ marginTop: "30px" }}>
        My <label style={{ color: "#ff5277" }}>projects</label>
      </h2>
      <p>
        You can check the source code on my{" "}
        <a
          href="https://github.com/RafaGomezGuillen/"
          title="Go to Rafael Gómez GitHub profile page"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        .
      </p>

      <div className="project-cards">
        {projectCards.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            paragraph={project.paragraph}
            links={project.links}
            web={project.web}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
