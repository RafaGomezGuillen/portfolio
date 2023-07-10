import React from "react";
import "./ParallaxCard.css";

function ParallaxCard({ title }) {
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
        <h1>{title}</h1>
        <div></div>
      </div>
    </div>
  );
}

export default ParallaxCard;
