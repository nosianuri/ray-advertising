import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../shared/Navbar/Navbar';
import Group from '../home/group/Group';
import GroupTitle from '../home/group/GroupTitle';
import Footer from '../Shared/Footer';
import Abanner from './Abanner';
import Career from './Career';

export const structuredDataSingle = () => {
  let data = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "About Ray Advertising LLC is a Rapidly Growing",
    "url": "https://rayadvertising.com/about",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://rayadvertising.com/service{search_term_string}https://rayadvertising.com/contact",
      "query-input": "required name=search_term_string"
    }
  }
  return JSON.stringify(data);
}

const About = () => {

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us | Ray Advertising LLC</title>
        <script type="application/ld+json">
          {`${structuredDataSingle()}`}
        </script>
      </Helmet>
      <Navbar />
      <Abanner />
      <Career />
      <GroupTitle />
      <Group />
      <Footer />
    </div>
  )
}

export default About;