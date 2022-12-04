import React from 'react'
import { Download, Faq, Subscribe } from '../../components';
import Features from '../../components/features/Features';
import Hero from '../../components/Hero/Hero'
import Service from '../../components/Service/Service';
import Contact from '../Shared/Contact';

import Info from '../Shared/Info';
import Banner from './Banner'
import Blog from './Blog';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Hero />
            <Banner />
            <Info />
            <Services data-aos="fade-up" />
            <Blog />
            <Testimonial />
            <Contact />
            
            {/* <Service />
    <Download />
    <Features  />
    */}

        </div>
    )
}

export default Home