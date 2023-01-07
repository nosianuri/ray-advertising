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
      // pagination={{ clickable: true }}
      // grabCursor={true}
      // breakpoints={{
      //   768: {
      //     slidesPerView: 1,
      //   },
      //   1024: {
      //     slidesPerView: 1,
      //   },
      // }}
      modules={[Navigation, Autoplay, Pagination]}
      className='reviewSlider core-box'
    >
      {programs.map((program, idx) => {
        // destructure program
        const { image, name } = program;

        return (

          <SwiperSlide
            key={idx}
          >
            <div class={`card  lg:card-side bg-base-100  pt-2`}>
              <div class="card-body ">

                <div className=''>
                  <img src={image} alt="" />
                </div>
              </div>
            </div>

          </SwiperSlide>

        );
      })}
    </Swiper>
  );
}

export default Advertiserpartner;