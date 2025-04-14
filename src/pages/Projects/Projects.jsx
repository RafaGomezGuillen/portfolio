import React from "react";
import "./Projects.css";
import ProjectCard from "../../components/Cards/ProjectCard/ProjectCard";
import { images } from "../../constants";

const experienceCards = [
  {
    image: images.redborder,
    title: "Software Engineer at Redborder NDR",
    paragraph: `Since June 2024, I have been a member of the software development team at Redborder NDR, a scalable, real-time cybersecurity platform. Redborder integrates advanced technologies such as Next-Generation Intrusion Prevention Systems (NGIPS), Network Traffic Analysis (NTA), and Security Information and Event Management (SIEM) into a unified system. Leveraging big data and AI-powered correlation engines, it provides comprehensive visibility and protection for IT infrastructures.`,
    links: [
      {
        title: "https://redborder.com/",
        type: "Web",
      },
      {
        title: "https://github.com/rgomezborder",
        type: "GitHub",
      },
    ],
  },
  {
    image: images.vivadrive,
    title: "Full Stack Developer at VivaDrive",
    paragraph: `I designed and created a website with city and country recommendations from scratch. Used React JS for the UI, Tailwind CSS for the layout, and Django Rest Framework for the backend.\n\nI was responsible for the implementation of recommendations from point A to B using React Leaflet. This system was based on parameters such as geographical coordinates and electric vehicle battery percentage, with the aim of providing an efficient and accurate solution to guide users optimally.\n\nContributed to improving SEO, performance, and accessibility on vivadrive.io, as well as fixing visual issues and fixing bugs.
  `,
    links: [
      {
        title: "https://vivadrive.io/",
        type: "Web",
      },
      {
        title: "https://github.com/viva-drive",
        type: "GitHub",
      },
    ],
  },
  {
    image: images.canariasSkills,
    title: "First Position at Canarias Skills Web App Development module",
    paragraph: `On February 28th and 29th, I had the opportunity to participate and win first place in the Canarias Skills representing CIFP Cesar Manrique in the Web Development module.\n\nIt was a challenge that involved creating a website in 7 hours, focusing on backend, frontend, accessibility, scalability, and deployment. Additionally, we had to present our work. In my case, I used Angular for the frontend and ASP .NET Core for the backend.
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
    image: images.whatsappAiAssistant,
    title: "WhatsApp AI Assistant",
    paragraph:
      "WhatsApp bot project that integrates GPT functionality with WhatsApp, allowing for various features such as text-to-speech, image generation, and more using React JS, Express and Docker.",
    links: [
      {
        title: "https://github.com/RafaGomezGuillen/whatsapp-ai-assistant/",
        type: "GitHub",
      },
    ],
  },
  {
    image: images.python,
    title: "Python / Data Science",
    paragraph:
      "Python / Data Science notes of different libraries such as pandas, django, numpy, seaborn and playwright.",
    links: [
      {
        title: "https://github.com/RafaGomezGuillen/data-science-python",
        type: "GitHub",
      },
    ],
  },
  {
    image: images.symphobeats,
    title: "Symphobeats",
    paragraph:
      "A project that combines Angular and Firebase technologies to create a web and mobile application inspired by Spotify. Users can create and share their own songs, albums and playlists with other music lovers.",
    links: [
      {
        title: "https://symphobeats.firebaseapp.com/en-US/login",
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
      "Formula One is a resume of the 2022 Formula One Season. You can check all statistics, charts and results of the multiple drivers and circuits of the 2022 calendar. The page was made with Vite JS React, Boostrap and Apex Charts.",
    links: [
      {
        title: "https://rafagomezguillen.github.io/formula-one/",
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
    image: images.happyBirthday,
    title: "Happy Birthday",
    paragraph:
      "This is a colorful and responsive birthday greeting web page built with React, Tailwind CSS, and Framer Motion. It features an animated image carousel, festive colors, and sweet wishes to celebrate birthdays!",
    links: [
      {
        title: "https://rafagomezguillen.github.io/happy-birthday/",
        type: "Web",
      },
      {
        title: "https://github.com/RafaGomezGuillen/happy-birthday",
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
