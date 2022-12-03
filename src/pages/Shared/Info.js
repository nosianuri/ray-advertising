import React from 'react';
import market from '../../assets/market-icon.svg';
import person from '../../assets/person-icon.svg';
import phone from '../../assets/phone.svg';
import InfoCard from './InfoCard';

const Info = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12 pt-12'>
        <InfoCard cardtitle="Affiliate Network" bgClass="bg-primary" descrip="Lead-gen experts in the world grow audiences in diverse global markets." img={market} />
        <InfoCard cardtitle="Pay Per Call" descrip="Lead-gen experts in the world grow audiences in diverse global markets."bgClass="bg-accent" img={person} />
        <InfoCard cardtitle="Lead Generation" descrip="Lead-gen experts in the world grow audiences in diverse global markets."bgClass="bg-primary" img={phone} />
    </div>
  )
}

export default Info