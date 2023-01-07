import React from 'react';
import EventCard from './EventCard';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import afliewate from '../../../assets/Affliatewg.jpg';
import meeting from '../../../assets/meeting.avif';

const Event = () => {
    const events = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: meeting,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: meeting,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: meeting,
        },

    ];
    return (
        <div className=''>
            <div className='bg-base-200 pt-10'>
            <div className='text-center  px-32'>
            <h2 className='text-4xl'>Some of our Recent Works</h2>
                <p></p>
            </div>
            <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeUp" : ""}>
                <div  className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:px-12 md:px-10 py-10'>
                    
                                {
                                    events.map((event, index) => {
                                        return (
                                            <EventCard
                                                key={index}
                                                {...event}
                                            />
                                        )
                                    })
                                }

                            </div>
                            </div>}
                    </TrackVisibility>
               
            </div>
        </div>
    )
}

export default Event