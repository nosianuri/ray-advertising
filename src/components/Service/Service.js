import React, { useEffect } from 'react';
import './Service.css';
import service1 from "../../assets/WarmTransferIMG.png";
import service2 from "../../assets/InboundCallIMG.png";
import service3 from "../../assets/ExecLeadIMG.png";
import service4 from "../../assets/2 Accelerate and simplify.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
    return (
        <div className='wrapper'>
        <div data-aos="fade-up" className='service-heading'>HERE’S WHAT WE CAN DO FOR YOUR BRAND​</div>
            <div className='service-wrap'>
                <div className='service-item' data-aos="fade-up">
                <div className='service-inner'>
                    
                        <img src={service1} alt="" />
                   
                    <div className='right-card'>
                        <h3>Pay Per Call</h3>
                        <p>Consistently named the #1 Pay Per Call Network, Ray provides consistency in quality and volume for advertisers across more than two dozen pay per call verticals.</p>
                    </div>
                </div>
                <div className='service-inner'>
                    
                    <img src={service2} alt="" />
                    
                    <div className='right-card'>
                        <h3>Lead Generation</h3>
                        <p>Acquire leads generated through dedicated vertical landing pages, content-site embeds. Leads are sold on an exclusive or shared basis.</p>
                    </div>
                </div>
                <div className='service-inner'>
                   
                    <img src={service3} alt="" />
                  
                    <div className='right-card'>
                        <h3>Affiliate Network</h3>
                        <p>Affiliate Partner Network: The key to a successful affiliate marketing campaign is to build relationships with people and companies.</p>
                    </div>
                </div>
                <div className='service-inner'>
                   
                    <img src={service4} alt="" />
                   
                    <div className='right-card'>
                        <h3>Brand Safety</h3>
                        <p>It is our mission to build a fully-transparent, brand-safe ecosystem that benefits advertisers, publishers, and consumers</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Service