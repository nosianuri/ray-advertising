import React, { useEffect } from "react";
import "./Download.css";
import { FaApple, FaWindows } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import { IconContext } from "react-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import logo1 from "../../assets/logo16.png";
import logo2 from "../../assets/logo17.png";
import logo3 from "../../assets/Untitled-design-4.png";
import logo4 from "../../assets/logo20-300x134.png";
import logo5 from "../../assets/logo21.png";
import logo6 from "../../assets/logo22.png";
import logo7 from "../../assets/logo23.png";
import logo8 from "../../assets/logo24.png";


const Download = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="download" className="py-8">
      <div className="download" data-aos="fade-up">
        <h2>ADVERTISING PARTNERS​</h2>
        {/* <p className="u-text-small">
          Our apps are available for download on all stores.
        </p> */}
<div className="partner ">
<div className="p1"><img className="download-icon" src={logo1} alt="" />
  <img className="download-icon" src={logo2} alt="" />
  <img className="download-icon" src={logo3} alt="" />
  <img className="download-icon" src={logo4} alt="" /></div>
  <div className="p2"><img className="download-icon" src={logo5} alt="" />
  <img className="download-icon" src={logo6} alt="" />
  <img className="download-icon" src={logo7} alt="" />
  <img className="download-icon" src={logo8} alt="" /></div>
  
</div>
        {/* <IconContext.Provider value={{ size: "15" }}>
          <div className="download-icons">
            <div className="download-icon">
              <FaApple /> <p>ios</p>
            </div>
            <div className="download-icon">
              <GrAndroid /> <p>Android</p>
            </div>
            <div className="download-icon">
              <FaWindows /> <p>Windows</p>
            </div>
          </div>
        </IconContext.Provider> */}
      </div>
    </section>
  );
};

export default Download;