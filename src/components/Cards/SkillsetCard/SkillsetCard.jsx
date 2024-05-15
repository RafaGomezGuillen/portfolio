import React from "react";
import "./SkillsetCard.css";

const SkillsetCard = ({ icon: Icon, link, title }) => {
  return (
    <a href={link} title={title} target="_blank">
      <div className="skillset-card">
        <Icon></Icon>
      </div>
    </a>
  );
};

export default SkillsetCard;
