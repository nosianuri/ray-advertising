import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../shared/Navbar/Navbar';
import Group from '../home/group/Group';
import GroupTitle from '../home/group/GroupTitle';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import ContactBody from './ContactBody';
export const structuredDataSingle = () => {
  let data = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "Ray Advertising LLC is a Rapidly Growing #1 Performance Marketing Affiliate Network",
    "url": "https://www.rayadvertising.com/contact",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://rayadvertising.everflowclient.io/affiliate/signup{search_term_string}https://rayadvertising.everflowclient.io/advertiser/signup",
      "query-input": "required name=search_term_string"
    }
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