import React from "react";
import "./Feature.css";
import { FaAccessibleIcon } from "react-icons/fa";
import { BsHexagon } from "react-icons/bs";

const Feature = ({ icon, heading, text }) => {
  return (
    <div className="feature">
      <div className="feature-icon">
        <BsHexagon color="#1f93ff" size={55} />
        <div className="inner-icon">{icon}</div>
      </div>

      <div className="feature-text">
        <h3 className="lg:text-3xl md:text-2xl sm:text-xl">{heading}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;