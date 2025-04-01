import React from "react";
import "./About.css";
import { images } from "../../constants";
import { FaReact } from "react-icons/fa";
import {
  SiDotnet,
  SiTypescript,
  SiAngular,
  SiFirebase,
  SiBlazor,
  SiJavascript,
  SiLogstash,
  SiApachedruid,
} from "react-icons/si";
import { DiDjango, DiJava, DiPython, DiRuby } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { SiTailwindcss, SiIonic, SiRubyonrails, SiChef } from "react-icons/si";
import SkillsetCard from "../../components/Cards/SkillsetCard/SkillsetCard";

const sections = [
  {
    title: "Redborder NDR stack",
    tools: [
      {
        icon: DiRuby,
        link: "https://www.ruby-lang.org/en/",
        title: "Ruby",
      },
      {
        icon: SiRubyonrails,
        link: "https://rubyonrails.org/",
        title: "Ruby on Rails",
      },
      {
        icon: SiChef,
        link: "https://www.chef.io/",
        title: "Chef server",
      },
      {
        icon: SiLogstash,
        link: "https://www.elastic.co/es/logstash",
        title: "Chef server",
      },
      {
        icon: SiApachedruid,
        link: "https://druid.apache.org/",
        title: "Apache Druid",
      },
    ],
  },
  {
    title: "Frontend",
    tools: [
      {
        icon: FaReact,
        link: "https://react.dev/",
        title: "React",
      },
      {
        icon: SiAngular,
        link: "https://angular.dev/",
        title: "Angular",
      },
      {
        icon: SiBlazor,
        link: "https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor",
        title: "Blazor",
      },
    ],
  },
  {
    title: "Backend",
    tools: [
      {
        icon: SiDotnet,
        link: "https://dotnet.microsoft.com/en-us/apps/aspnet/apis",
        title: "APIs with ASP.NET Core",
      },
      {
        icon: DiDjango,
        link: "https://www.django-rest-framework.org/",
        title: "Django Rest Framework",
      },
      {
        icon: SiFirebase,
        link: "https://firebase.google.com/",
        title: "Firebase",
      },
    ],
  },
  {
    title: "Programming languages",
    tools: [
      {
        icon: TbBrandCSharp,
        link: "https://dotnet.microsoft.com/en-us/languages/csharp",
        title: "C#",
      },
      { icon: DiPython, link: "https://www.python.org/", title: "Python" },
      { icon: DiJava, link: "https://www.java.com/en/", title: "Java" },
      {
        icon: SiTypescript,
        link: "https://www.typescriptlang.org/",
        title: "TypeScript",
      },
      {
        icon: SiJavascript,
        link: "https://developer.mozilla.org/en-US/docs/Web/javascript",
        title: "JavaScript",
      },
    ],
  },
  {
    title: "Tools",
    tools: [
      {
        icon: SiTailwindcss,
        link: "https://tailwindcss.com/",
        title: "Tailwind CSS",
      },
      { icon: SiIonic, link: "https://ionicframework.com/", title: "Ionic" },
    ],
  },
];

const About = () => {
  return (
    <>
      <div className="about-presentation">
        <h1>About me</h1>
        <div className="about-presentation-row">
          <div className="about-presentation-col">
            <img src={images.rafaGomez} alt="Rafael Gómez" />
          </div>
          <div className="about-presentation-col">
            <p>
              I am <span style={{ color: "#43a9a3" }}>Rafael Gómez</span>, a
              Software Engineer and Web Application Developer based in Tenerife,
              Spain.
              <br />
              <br />
              My <span style={{ color: "#43a9a3" }}>goal</span>, is to
              contribute to the ever-evolving field of software development,
              leveraging my technical expertise to deliver impactful solutions
              that meet user needs and exceed expectations.
            </p>
          </div>
        </div>
      </div>

      {sections.map((section, index) => (
        <div className="technologie-cards" key={index}>
          {section.title === "Redborder NDR stack" ? (
            <p>
              <span style={{ color: "#ff5277" }}>{section.title}</span> I am
              worked with
            </p>
          ) : (
            <p>
              <span style={{ color: "#ff5277" }}>{section.title}</span> I have
              worked with
            </p>
          )}

          <div className="technologie-cards-row">
            {section.tools.map((tool, toolIndex) => (
              <SkillsetCard
                key={toolIndex}
                icon={tool.icon}
                link={tool.link}
                title={`Go to ${tool.title} page`}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default About;
