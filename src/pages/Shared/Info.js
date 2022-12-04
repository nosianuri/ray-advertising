import React, { useEffect } from 'react';
import market from '../../assets/market-icon.svg';
import person from '../../assets/person-icon.svg';
import phone from '../../assets/phone.svg';
import InfoCard from './InfoCard';
import AOS from "aos";
import "aos/dist/aos.css";

const Info = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12 pt-12' data-aos="fade-up">
        <InfoCard cardtitle="Affiliate Network" bgClass="bg-primary" descrip="Affiliate network works with publishers and merchant programs." img={market} />
        <InfoCard cardtitle="Pay Per Call" descrip="advertisers across more than two dozen pay per call verticals." bgClass="bg-accent" img={person} />
        <InfoCard cardtitle="Lead Generation" descrip="Lead-gen experts in the world grow audiences in diverse global markets." bgClass="bg-primary" img={phone} />
    </div>
  )
}

export default Info