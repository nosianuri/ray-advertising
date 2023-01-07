import React from 'react';
import img1 from '../../assets/pay.png';
import img2 from '../../assets/net.png';
import img3 from '../../assets/money-bitcoin.png';
import centerimg1 from '../../assets/InboundCallIMG.png';
import centerimg2 from '../../assets/WarmTransferIMG.png';

const Orbit = () => {
  return (
    <div className='orbit'>
    <div className='center-image'>
        <img src={centerimg1} alt="" />
        <img src={centerimg2} alt="" />
    </div>
        <ul>
        <li>
        <img src={img1} alt="" />
            <p>Analytics</p>
        </li>
        <li>
        <img src={img2} alt="" />
            <p>Analytics</p>
        </li>
        <li>
        <img src={img3} alt="" />
            <p>Analytics</p>
        </li>
        <li>
        <img src={img1} alt="" />
            <p>Analytics</p>
        </li>
        <li>
        <img src={img2} alt="" />
            <p>Analytics</p>
        </li>
        <li>
        <img src={img3} alt="" />
            <p>Analytics</p>
        </li>
        <li>
        <img src={img1} alt="" />
            <p>Analytics</p>
        </li>
        <li>
        <img src={img2} alt="" />
            <p>Analytics</p>
        </li>
            
        </ul>
    </div>
  )
}

export default Orbit