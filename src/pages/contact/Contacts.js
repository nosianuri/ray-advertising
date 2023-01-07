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

  return (
    <div>
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