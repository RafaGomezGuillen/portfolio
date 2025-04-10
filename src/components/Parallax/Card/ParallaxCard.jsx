import React from "react";
import "./ParallaxCard.css";

const ParallaxCard = ({ title }) => {
  return (
    <div className="tilt-box-wrap">
      <span className="t_over"></span>
      <span className="t_over"></span>
      <span className="t_over"></span>
      <span className="t_over"></span>
      <span className="t_over"></span>
      <span className="t_over"></span>
      <span className="t_over"></span>
      <span className="t_over"></span>
      <span className="t_over"></span>
      <div className="tilt-box">
        <h5>{title}</h5>
        <div></div>
      </div>
    </div>
  );
};

export default ParallaxCard;
