import React from 'react';
import CountUp from 'react-countup';
import { facts } from '../data';

export const Facts = () => {
  return (
    <div className='section-sm lg:section-lg'>
        <div className=' flex flex-wrap  '>
          {facts.map((item, index) => {
            const { startNumber, endNumber, unit, title } = item;
            return (
              <div className='w-[28%] mt-5' key={index}>
                <h2 className=' text-[#4FA1F6] text-4xl font-bold'>
                  <CountUp
                  className=''
                    start={startNumber}
                    end={endNumber}
                    duration={3}
                    enableScrollSpy
                  />
                  {unit} <span className='text-md text-[#FFD124]'>+</span>
                </h2>
                <div className='text-heading text-primary mb-3'>{title}
                </div>
                
              </div>
            )
          })}
        </div>
    </div>
  )
}
