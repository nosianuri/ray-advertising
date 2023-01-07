import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { workouts } from '../../../shared/data';
// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Navigation, Autoplay, Pagination } from 'swiper';

const Advertiserpartner = () => {
  const { programs } = workouts;
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={5}
      autoplay={true}
      navigation
      
      modules={[Navigation, Autoplay, Pagination]}
      className='reviewSlider core-box'
    >
      {programs.map((program, idx) => {
       
        const { image, name } = program;

        return (

          <SwiperSlide
            key={idx}
          >
            <div class={`lg:card-side bg-base-100  pt-2`}>
                <div className='lg:p-3 p-2'>
                  <img src={image} alt="" />
                </div>
              
            </div>

          </SwiperSlide>

        );
      })}
    </Swiper>
  );
}

export default Advertiserpartner;