import React from 'react';
import Video from '../../assets/Video/hero.mp4';
import './Hero.css';
import { BsMouse } from "react-icons/bs";

const Hero = () => {
    return (
        <div>
            <div className='hero'>
                {/* Hero */}
                
                <video src="https://digitalmediasolutions.com/themes/dms/assets/video/dms-banner-sm.mp4" autoPlay loop muted id='video'>
                    {/* <source  type='video/mp4' /> */}
                </video>
                {/* <div className="overlay"></div> */}
               {/* <div className="top-header-text">
                    <h1>We Acquire Customers</h1>
                    <h2>By Leveraging Innovative Technologies In Online Marketing</h2>
                    <div className="floating-icon">
        <a href="#features">
          <BsMouse color="#fff" size={25} className="mouse" />
        </a>
      </div> 
                </div> */}

                {/* <div class="container h-100">
                    <div class="d-flex h-100 text-center align-items-center">
                        <div class="w-100 text-white">
                            <div class='row container-fluid'>
                                <div class='col-md-12'>
                                    <div id="home-carousel" class="carousel slide carousel-fade row mt-5" data-ride="carousel" data-interval="3000">

                                        <div class="col-xl-12 text-center carousel-text">
                                            <h1 class="">We are...</h1>
                                        </div>
                                        <div class="carousel-inner col-xl-12 text-center carousel-text">
                                            <div class="item active align-middle">
                                                <h1 class="display-3">Creating options for&nbsp;consumers</h1>
                                            </div>
                                            <div class="item align-middle">
                                                <h1 class="display-3">De-risking advertiser media&nbsp;spend</h1>
                                            </div>
                                            <div class="item align-middle">
                                                <h1 class="display-3">Maximizing publisher monetization</h1>
                                            </div>
                                            <div class="item align-middle">
                                                <h1 class="display-3">Building a more efficient advertising ecosystem</h1>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        

    )
}

export default Hero;