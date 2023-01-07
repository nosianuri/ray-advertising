import React from "react";
import "./Feature.css";
import { BsHexagon } from "react-icons/bs";

const Feature = ({ icon, heading, text }) => {
  return (
    <div className="feature">
      <div className="feature-icon">
        <BsHexagon color="006778" size={55} />
        <div className="inner-icon">{icon}</div>
      </div>

      <div className="feature-text">
        <h3 className="lg:text-2xl md:text-2xl sm:text-xl">{heading}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;