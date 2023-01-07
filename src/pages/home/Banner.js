// import React, { useEffect } from 'react';
// import bannerimg from '../../assets/photo-editors.jpg';
// import bannerphoto from "../../assets/photographer.jpg";
// import './Banner.css';
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Facts } from '../../shared/Facts/Facts';

// const Banner = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//     });
//   }, []);
//   return (
//     <div class="hero banner my-5 ">
//       <div class="hero-content flex-col lg:flex-row-reverse ">

//       <div className=' lg:pr-14 md:pr-10 '>
       
//       <div className=''>
     
//         <div className='flex justify-between gap-10 lg:mr-20 '>
//           <div>
//           <img width={230} height={100} src={bannerimg} class="max-w-sm rounded-lg !rotate-[25deg] banner-image" alt='tower' data-aos="fade-up" />
//           </div>
//           <img width={230} height={100} src={bannerphoto} class="max-w-sm rounded-lg !rotate-[25deg] banner-image" alt='tower' data-aos="fade-up" />
//         </div>
        
//         </div>
//         </div>

//         <div className=' lg:pr-32 lg:ml-10 md:ml-8'>
//           <h5 className='text-primary '>BRANDING AGENCY SERVICES</h5>
//           <div>
         
//             <h1 class="lg:text-4xl md:text-3xl sm:text-2xl font-semibold !leading-normal text-primary">We Are <span className='text-[#4FA1F6] !font-semibold'>Branding Solution</span> And Advertising Agency</h1>
//           </div>
          

//           <p class=" lg:text-xl md:text-xl text-primary sm:text-xl mt-3"> Digital Market Media is the most trusted provider of inbound calls and leads for insurance, financial services, and other industries.</p>
//           <div className='flex gap-5'>
//             <button class="btn btn-secondary rounded-full lg:px-5 hover:text-white  text-white border-2 border-blue  group relative flex items-center overflow-hidden mt-5">
             
//               <span className='relative font-bold'><a className='rel' href="/about">Our services</a></span>
//             </button>
//             <a href="tel:+14356251961">
//               <button className='btn rounded-full text-secondary border-0 hover:bg-white bg-white mt-5'><i class="fa-solid fa-phone pr-3"></i>(435) 625-1961</button>
//             </a>
//           </div>
//           <Facts />
//         </div>
       
//       </div>
//       </div>
  
//    )
// }

// export default Banner