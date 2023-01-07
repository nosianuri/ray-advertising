import React, { useEffect } from 'react';
import { Download } from '../../components';
import Navbar from '../../shared/Navbar/Navbar';
import Group from '../home/group/Group';
import GroupTitle from '../home/group/GroupTitle';
import Footer from '../Shared/Footer';
import Abanner from './Abanner';
import Career from './Career';
import Story from './Story';

const About = () => {

  useEffect(() => {
    document.title = "About Us | Ray Advertising LLC";
  }, []);

  return (
    <div>
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