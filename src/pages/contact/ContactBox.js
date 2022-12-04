import React, { useEffect } from 'react';
import contactbackground from "../../assets/subscribe-bg.png";
import address from "../../assets/address.png";
import phone from "../../assets/phone.png";
import mail from "../../assets/mail.png";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactBox = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section style={{
      background: `url(${contactbackground})`
    }} className='flex justify-center items-center mb-16'>
      <div className='flex-1 px-32'>
        <div className="card w-96 bg-secondary mt-[-90px] text-neutral-content mb-32" >
          <div className="card-body items-center text-center text-white" >
            <h2 className="card-title"><i class="fa-solid fa-location-dot"></i>1267 Willis ST STE 200, </h2>
            <h2 className="card-title">Redding, CA, 96001</h2>
            <h2 className="card-title"><img width={20} src={phone} alt="" />(435) 625-1961</h2>
            <h2 className="card-title"><i class="fa-solid fa-envelope"></i>@rayadvertising.com</h2>

          </div>
        </div>

      </div>

    </section>
  )
}

export default ContactBox