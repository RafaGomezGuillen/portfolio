import React from "react";
import "./SkillsetCard.css";

const SkillsetCard = ({ icon: Icon, link, title, subtitle }) => {
  return (
    <a href={link} title={title} target="_blank" rel="noreferrer" className="skillset-card-container">
      <div className="skillset-card">
        <Icon></Icon>
      </div>

      <div className="skillset-card-title">
        <p>{subtitle}</p>
      </div>
    </a>
  );
};

export default SkillsetCard;
