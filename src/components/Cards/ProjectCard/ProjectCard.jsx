import React from "react";
import "./ProjectCard.css";
import { AiOutlineLink } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ image, title, paragraph, links }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{paragraph}</p>
      <div className="link-container">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.title}
            title={`Go to ${title} ${link.type}`}
            target="_blank"
            rel="noreferrer"
          >
            {link.type === "GitHub" ? (
              <FaGithub style={{ width: "25px", height: "25px" }} />
            ) : (
              <AiOutlineLink style={{ width: "25px", height: "25px" }} />
            )}
            <span>{link.type}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
