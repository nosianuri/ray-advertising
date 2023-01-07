import React from 'react';
import './WorkSlider.css';
import meeting from '../../../assets/High meeting room-1.jpeg';
import img2 from '../../../assets/3_.png';
import img3 from '../../../assets/photographer.jpg';

const WorkSlider = () => {
  return (
    <div className='workslider'>
      <div className='wslider'>
        <span value='1' style={{ i: 1 }} ><img src={meeting} alt="" /></span>
        <span value='2' style={{ i: 2 }}  ><img src={img2} alt="" /></span>
        <span value='3' style={{ i: 3 }}  ><img src={img3} alt="" /></span>
        <span value='4' style={{ i: 4 }}  ><img src={meeting} alt="" /></span>
        <span value='5' style={{ i: 5 }}  ><img src={meeting} alt="" /></span>
        <span value='6' style={{ i: 6 }}  ><img src={meeting} alt="" /></span>
        <span value='7' style={{ i: 7 }}  ><img src={meeting} alt="" /></span>
        <span value='8' style={{ i: 8 }}  ><img src={meeting} alt="" /></span>
      </div>
    </div>
  )
}

export default WorkSlider