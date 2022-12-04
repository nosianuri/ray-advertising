import React from 'react'
import logo1 from "../../assets/logo6-300x134-1.png";
import logo2 from "../../assets/Contact.io-Logo-no-messaging.png";
import logo3 from "../../assets/logo15-300x134-1.png";
import logo4 from "../../assets/download (2).png";
import logo5 from "../../assets/download-2.png";
import logo6 from "../../assets/images-300x89-1.png";
import logo7 from "../../assets/logo10.png";
import logo8 from "../../assets/logo-2048x808.webp";

const Publisher = () => {
  return (
    <section id="download" className="py-8">
      <div className="download" data-aos="fade-up">
        <h2>TRAFFIC PARTNERS​​</h2>
        
        <div className="partner sm:mx-20 mx-5">
          <div className="partner-icon text-center w-full">
            <img className="download-icon transform transition-all hover:translate-x-4" src={logo1} alt="" />
            <img className="download-icon transform transition-all hover:translate-x-4" src={logo2} alt="" />
            <img className="download-icon transform transition-all hover:translate-x-4" src={logo3} alt="" />
            <img className="download-icon transform transition-all hover:translate-x-4" src={logo4} alt="" />
            <img className="download-icon transform transition-all hover:translate-x-4" src={logo5} alt="" />
            <img className="download-icon transform transition-all hover:translate-x-4" src={logo6} alt="" />
            <img className="download-icon transform transition-all hover:translate-x-4" src={logo7} alt="" />
            <img className="download-icon transform transition-all hover:translate-x-4" src={logo8} alt="" />
          </div>

        </div>
        
      </div>
    </section>
  )
}

export default Publisher