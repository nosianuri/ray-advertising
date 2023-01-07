import React, { useEffect } from "react";
import "./Header.css";
import "../UI/button/Button.css";
import phoneHeader from "../../assets/towers.png";


import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="header">
      <div className=" header">
        <div className="header-left" data-aos="fade-right">
          <h1>
            <span>THE SMART PATH</span>
            <span>FOR BRAND SUCCESS</span>
            <span>pay per call leads</span>
          </h1>
          <p>
          Digital Market Media is the most trusted provider of inbound calls and leads for insurance, financial services, and other industries.
          </p>
         
        </div>
        <div className="header-right" data-aos="fade-left">
          <img src={phoneHeader} alt="phone" />
        </div>
      </div>
     
    </section>
  );
};

export default Header;