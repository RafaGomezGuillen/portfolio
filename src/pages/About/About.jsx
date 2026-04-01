import React from "react";
import "./About.css";
import { images } from "../../constants";
import { FaReact, FaLinux, FaBootstrap } from "react-icons/fa";
import { SiLogstash, SiApachedruid, SiDocker, SiRedis } from "react-icons/si";
import { DiDjango, DiPython, DiRuby } from "react-icons/di";
import {
  SiTailwindcss,
  SiRubyonrails,
  SiChef,
  SiApachekafka,
  SiLeaflet,
} from "react-icons/si";
import { BiLogoPostgresql, BiLogoGoLang } from "react-icons/bi";
import SkillsetCard from "../../components/Cards/SkillsetCard/SkillsetCard";

const sections = [
  {
    title: "Indra stack",
    link: "https://www.indragroup.com/",
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
        icon: FaBootstrap,
        link: "https://getbootstrap.com/",
        title: "Bootstrap",
      },
      {
        icon: BiLogoPostgresql,
        link: "https://www.postgresql.org/",
        title: "PostgreSQL",
      },
      {
        icon: SiRedis,
        link: "https://redis.io/",
        title: "Redis",
      },
      {
        icon: SiLeaflet,
        link: "https://leafletjs.com/",
        title: "Leaflet",
      },
      { icon: SiDocker, link: "https://www.docker.com/", title: "Docker" },
      {
        icon: FaLinux,
        link: "https://www.linux.org/",
        title: "Linux",
      },
    ],
  },
  {
    title: "Redborder NDR stack",
    link: "https://www.redborder.com/",
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
        icon: BiLogoPostgresql,
        link: "https://www.postgresql.org/",
        title: "PostgreSQL",
      },
      {
        icon: SiRedis,
        link: "https://redis.io/",
        title: "Redis",
      },
      { icon: DiPython, link: "https://www.python.org/", title: "Python" },
      { icon: BiLogoGoLang, link: "https://golang.org/", title: "Go" },
      {
        icon: SiChef,
        link: "https://www.chef.io/",
        title: "Chef server",
      },
      {
        icon: SiLogstash,
        link: "https://www.elastic.co/es/logstash",
        title: "Logstash",
      },
      {
        icon: SiApachedruid,
        link: "https://druid.apache.org/",
        title: "Apache Druid",
      },
      {
        icon: SiApachekafka,
        link: "https://kafka.apache.org/",
        title: "Apache Kafka",
      },
      { icon: SiDocker, link: "https://www.docker.com/", title: "Docker" },
      {
        icon: FaLinux,
        link: "https://www.linux.org/",
        title: "Linux",
      },
    ],
  },
  {
    title: "Vivadrive stack",
    link: "https://vivadrive.io/",
    tools: [
      {
        icon: FaReact,
        link: "https://react.dev/",
        title: "React",
      },
      {
        icon: DiDjango,
        link: "https://www.django-rest-framework.org/",
        title: "Django Rest Framework",
      },
      { icon: DiPython, link: "https://www.python.org/", title: "Python" },
      {
        icon: BiLogoPostgresql,
        link: "https://www.postgresql.org/",
        title: "PostgreSQL",
      },
      {
        icon: SiTailwindcss,
        link: "https://tailwindcss.com/",
        title: "Tailwind CSS",
      },
      {
        icon: SiLeaflet,
        link: "https://leafletjs.com/",
        title: "Leaflet",
      },
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
          {section.title === "Indra stack" ? (
            <p>
              <a
                href={section.link}
                title={`Go to ${section.title}`}
                style={{ color: "#ff5277", textDecoration: "underline" }}
                target="_blank"
                rel="noreferrer"
              >
                {section.title}
              </a>{" "}
              I am working with
            </p>
          ) : (
            <p>
              <a
                href={section.link}
                title={`Go to ${section.title}`}
                style={{ color: "#ff5277", textDecoration: "underline" }}
                target="_blank"
                rel="noreferrer"
              >
                {section.title}
              </a>{" "}
              I have worked with
            </p>
          )}

          <div className="technologie-cards-row">
            {section.tools.map((tool, toolIndex) => (
              <SkillsetCard
                key={toolIndex}
                icon={tool.icon}
                link={tool.link}
                title={`Go to ${tool.title} page`}
                subtitle={tool.title}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default About;
