import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



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
        
        <div className="partner sm:mx-20 mx-5">
          <div className="partner-icon text-center w-full">
            <img className="download-icon transform transition-all hover:translate-x-4" src='' alt="" />
            <img className="download-icon transform transition-all hover:translate-x-4" src='' alt="" />
            <img className="download-icon transform transition-all hover:translate-x-4" src='' alt="" />
            <img className="download-icon transform transition-all hover:translate-x-4" src='' alt="" />
            <img className="download-icon transform transition-all hover:translate-x-4" src='' alt="" />
            <img className="download-icon transform transition-all hover:translate-x-4" src='' alt="" />
            <img className="download-icon transform transition-all hover:translate-x-4" src='' alt="" />
            <img className="download-icon transform transition-all hover:translate-x-4" src='' alt="" />
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default Download;