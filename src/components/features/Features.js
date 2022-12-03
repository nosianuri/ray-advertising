import React, { useEffect } from "react";
import "./Features.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import phoneFeatures from "../../assets/circuits.png";
import Feature from "./Feature";
import { FeatureList } from "./data";

import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (


    <div id="features">
      <div className="features">
        <div className="title" data-aos="fade-up">
        <div className="flex justify-center">
        <BsFillBookmarkStarFill color="#1f93ff" size={30} />
        </div>
          
          <h2>EXPERTISE</h2>
          <p>
            Our team is made up of digital marketing, creative, and technology experts who offer infinite value to our clients. Our core specialties are affiliate marketing, lead generation, and pay-per-call verticals..
          </p>
        </div>


        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content flex-col lg:flex-row">
            <img src={phoneFeatures} alt="phone" class="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <div className="features-right pl-32" data-aos="fade-left">
                {FeatureList.map((feature) => (
                  <Feature
                    key={feature.id}
                    icon={feature.icon}
                    heading={feature.heading}
                    text={feature.text}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>


        {/* <div className="features-content">
          <div className="features-left" data-aos="fade-right">
            <img src={phoneFeatures} alt="phone" />
          </div>
          <div className="features-right" data-aos="fade-left">
            {FeatureList.map((feature) => (
              <Feature
                key={feature.id}
                icon={feature.icon}
                heading={feature.heading}
                text={feature.text}
              />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Features;