import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../shared/Navbar/Navbar';
import Group from '../home/group/Group';
import GroupTitle from '../home/group/GroupTitle';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import ContactBody from './ContactBody';
export const structuredDataSingle = () => {
  let data = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Ray Advertising LLC",
    "alternateName": "Ray Advertising LLC is a Rapidly Growing #1 PERFECT MARKETING WITH PERFECT PARTNER",
    "url": "https://rayadvertising.com/",
    "logo": "https://rayadvertising.com/static/media/raywhitelogo.899312d274de91eb166a.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "4356277657",
      "contactType": "technical support",
      "contactOption": ["TollFree","HearingImpairedSupported"],
      "areaServed": "US",
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://www.facebook.com/rayadvertisingllc",
      "https://mobile.twitter.com/rayadvertising",
      "https://www.instagram.com/rayadvertisingllc/",
      "https://www.linkedin.com/company/rayadvertising",
      "https://www.pinterest.com/rayadvertising/",
      "https://www.tumblr.com/rayadvertisingllc",
      "https://rayadvertising.com/"
    ]
  }
  return JSON.stringify(data);
}

const Contacts = () => {


  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us | Ray Advertising LLC</title>
        <script type="application/ld+json">
          {`${structuredDataSingle()}`}
        </script>

      </Helmet>
      <Navbar />
      <Banner />
      <ContactBody />
      <GroupTitle />
      <Group />
      <Footer />
    </div>
  )
}

export default Contacts;