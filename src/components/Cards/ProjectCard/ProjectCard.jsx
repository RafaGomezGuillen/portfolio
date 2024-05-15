import React from "react";
import "./ProjectCard.css";
import { AiOutlineLink } from "react-icons/ai";

const ProjectCard = ({ image: Image, title, paragraph, link, web }) => {
  return (
    <div className="project-card">
      <div
        className="project-card-img"
        style={{ backgroundImage: `url(${Image})` }}
      ></div>
      <h2>{title}</h2>
      <p>{paragraph}</p>
      <a href={link} title={`Go to ${title} ${web}`} target="_blank">
        <AiOutlineLink style={{ width: "25px", height: "25px" }} />{" "}
        <span>{web}</span>
      </a>
    </div>
  );
};

export default ProjectCard;
