import React from 'react';
import { workouts } from '../../../shared/data';
// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import './workSlider.css';
// import required modules
import { Navigation, Autoplay, Pagination } from 'swiper';

const Partners = () => {
    // destructure data
  const { programs } = workouts;
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={32}
      autoplay={true}
      navigation
      pagination={{ clickable: true }}
      // grabCursor={true}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      modules={[Navigation, Autoplay, Pagination]}
      className='workoutSlider'
    >
      {programs.map((program, idx) => {
        // destructure program
        const { image } = program;

        return (

          <SwiperSlide
            key={idx}
          >
            <div class={`card w-full h-3/2 lg:card-side bg-white `}>
              <div class="mx-auto">
              <img width={150} className="mx-auto" src={image} alt="" />
              
              </div>
            </div>
          </SwiperSlide>

        );
      })}
    </Swiper>
  );
};

export default Partners