import React, { useEffect } from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import Group from '../home/group/Group';
import GroupTitle from '../home/group/GroupTitle';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import ContactBody from './ContactBody';

const Contacts = () => {
  useEffect(() => {
    document.title = "Contact Us | Ray Advertising LLC";
}, []);

const articleStructuredData =
{
  "@context": "https://schema.org/",
  "@type": "WebSite",
  "name": "Contact-Us | Ray Advertising LLC ",
  "url": "https://www.rayadvertising.com/contact",
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
      <Banner />
      <ContactBody />
      <GroupTitle />
      <Group />
      <Footer />
    </div>
  )
}

export default Contacts;