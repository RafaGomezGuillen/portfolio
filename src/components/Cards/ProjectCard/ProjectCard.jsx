import React from "react";
import "./ProjectCard.css";
import { AiOutlineLink } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ image, title, paragraph, links }) => {
  return (
    <div className="project-card">
      <div className="card-image-wrapper">
        <img src={image} alt={title} />
        <div className="image-overlay"></div>
      </div>
      <div className="card-content">
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
              className="card-link"
            >
              {link.type === "GitHub" ? (
                <FaGithub style={{ width: "20px", height: "20px" }} />
              ) : (
                <AiOutlineLink style={{ width: "20px", height: "20px" }} />
              )}
              <span>{link.type}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
