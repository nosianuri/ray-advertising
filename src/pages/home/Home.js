import React, { useEffect } from 'react';
import BannerBody from './BannerBody/BannerBody';
import CoreFeature from './CoreFeature/CoreFeature';
import Faqs from './Faq/Faqs';
import Group from './group/Group';
import GroupTitle from './group/GroupTitle';
import Projects from './Projects/Projects';
import img1 from "../../assets/blue_anim.jpg";
import img2 from "../../assets/imgpsh_fullsize (2).png";
import Trafic from './traffic/Trafic';
import Advertiser from './traffic/Advertiser';
import Featured from './traffic/Featured';
import Navbar from '../../shared/Navbar/Navbar';
import Footer from '../Shared/Footer';



const Home = () => {
    useEffect(() => {
        document.title = "Rapidly Growing #1 Network in the USA | Ray Advertising LLC";
    }, []);

    const articleStructuredData =
    {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "Contact-Us | Ray Advertising LLC ",
        "url": "https://www.rayadvertising.com",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://rayadvertising.everflowclient.io/affiliate/signup{search_term_string}https://rayadvertising.everflowclient.io/advertiser/signup",
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <div>
            <script type="application/ld+json">
                {JSON.stringify(articleStructuredData)}
            </script>
            <Navbar />
            <BannerBody />
            <CoreFeature />
            <Trafic />
            <Advertiser />
            <img className='w-full' src={img1} alt="" />
            <Projects />
            <img className='' src={img2} alt="" />
            <Featured />
            <Faqs />
            <GroupTitle />
            <Group />
            <Footer />
        </div>
    )
}

export default Home