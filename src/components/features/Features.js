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
      <div className="features mt-16">
        <div className="title">
        <div className="flex justify-center">
        <BsFillBookmarkStarFill color="#1f93ff" size={30} />
        </div>
          
          <h2>EXPERTISE</h2>
          <p>
            Our team is made up of digital marketing, creative, and technology experts who offer infinite value to our clients. Our core specialties are affiliate marketing, lead generation, and pay-per-call verticals..
          </p>
        </div>
        <div class="divider w-28 flex items-center justify-center mx-auto"></div>
        {/* <div class="card card-side bg-base-100">
  <figure>
  <img src={phoneFeatures} alt="phone" class="mx-w-sm rounded-lg" />
  </figure>
  <div className="lg:px-16">
              <div className="features-right lg:pl-16">
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
</div> */}


        <div class="hero min-h-screen bg-white">
          <div class="hero-content flex-col lg:flex-row">
            <img src={phoneFeatures} alt="phone" class="mx-w-sm rounded-lg " data-aos="fade-right" />
            <div>
              <div className="features-right lg:pl-32" data-aos="fade-left">
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