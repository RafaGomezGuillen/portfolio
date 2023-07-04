import React from "react";
import "./ProjectCard.css";
import { AiFillGithub } from "react-icons/ai";

const ProjectCard = ({ image: Image, title, paragraph, link }) => {
  return (
    <div className="project-card">
      <div
        className="project-card-img"
        style={{ backgroundImage: `url(${Image})` }}
      ></div>
      <h1>{title}</h1>
      <p>{paragraph}</p>
      <a href={link}>
        <AiFillGithub style={{ width: "25px", height: "25px" }} />{" "}
        <span>GitHub</span>
      </a>
    </div>
  );
};

export default ProjectCard;
