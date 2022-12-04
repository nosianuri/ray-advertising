import React from 'react';
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import './Hero.css';
import { BsMouse } from "react-icons/bs";

const Hero = () => {
    return (
        <div>
            <div className='hero'>

                <video src="https://digitalmediasolutions.com/themes/dms/assets/video/dms-banner-sm.mp4" autoPlay loop muted id='video'>
                    
                </video>
                <div className="overlay"></div>
                <div className="top-header-text">
                    <h1 className=''>We Acquire Customers</h1>
                    <h2>By Leveraging Innovative Technologies In Online Marketing</h2>
                    <div className="floating-icon">
                        <a href="#services">
                            <BsMouse color="#fff" size={25} className="mouse" />
                        </a>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Hero;