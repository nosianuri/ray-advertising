import React, { useEffect } from 'react';
import service1 from "../../assets/WarmTransferIMG.png";
import service2 from "../../assets/InboundCallIMG.png";
import service3 from "../../assets/ExecLeadIMG.png";
import service4 from "../../assets/2 Accelerate and simplify.png";
import Service from "./Service";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
    const services = [
        {
            _id: 1,
            name: 'Pay Per Call',
            description: 'Consistently named the #1 Pay Per Call Network, Ray provides consistency in quality and volume for advertisers across more than two dozen pay per call verticals.',
            img: service1
        },
        {
            _id: 2,
            name: 'Lead Generation',
            description: 'Acquire leads generated through dedicated vertical landing pages, content-site embeds. Leads are sold on an exclusive or shared basis.',
            img: service2
        },
        {
            _id: 3,
            name: 'Affiliate Network',
            description: 'Affiliate Partner Network: The key to a successful affiliate marketing campaign is to build relationships with people and companies.',
            img: service3
        },
        {
            _id: 4,
            name: 'Brand Safety',
            description: 'It is our mission to build a fully-transparent, brand-safe ecosystem that benefits advertisers, publishers, and consumers',
            img: service4
        },
    ]
  return (
    <div className='my-28 px-12 '>
    <div className='text-center py-5 data-aos="fade-up"'>
    <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
        <h2 className='text-4xl py-5'>Services we provide</h2>
    </div>
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ' data-aos="fade-up">
{
    services.map(service=><Service key={service._id} service={service}></Service>)
}
    </div>
    </div>
  )
}

export default Services