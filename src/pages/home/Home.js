import React from 'react';
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
import { Helmet } from 'react-helmet';

export const structuredDataSingle = () => {
    let data = {
        "@context": "http://schema.org",
        "@type": "WebSite",
        "name": "Ray Advertising LLC is a Rapidly Growing",
        "url": "https://rayadvertising.com/",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://rayadvertising.everflowclient.io/affiliate/signup{search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "hasPart" : [{
              "@type" : "WebPage",
              "name" : "ADVERTISERS",
              "url" : "https://rayadvertising.everflowclient.io/advertiser/signup"
          },
          {
              "@type" : "WebPage",
              "name" : "Our Service ",
              "url" : "https://rayadvertising.com/service"
          },
          {
              "@type" : "WebPage",
              "name" : "Contact Us",
              "url" : "https://rayadvertising.com/contact"
          }]
      }
    return JSON.stringify(data);
}

const Home = () => {

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Ray Advertising LLC is a Rapidly Growing #1 Performance Marketing Affiliate Network. | Ray Advertising LLC</title>
                <script type="application/ld+json">
                    {`${structuredDataSingle()}`}
                </script>

            </Helmet>
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