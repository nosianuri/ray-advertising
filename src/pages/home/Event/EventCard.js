import React from 'react';
import './Event.css';

const EventCard = ({title, description, imgUrl}) => {
  return (
    <div>
        <div className="proj-imgbx">
        <img src={imgUrl} alt='' />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </div>
  )
}

export default EventCard;