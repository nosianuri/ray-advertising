import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../shared/Navbar/Navbar';
import Group from '../home/group/Group';
import GroupTitle from '../home/group/GroupTitle';
import Footer from '../Shared/Footer';
import Abanner from './Abanner';
import Career from './Career';

const About = () => {

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us | Ray Advertising LLC</title>
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