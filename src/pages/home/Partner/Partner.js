import React from 'react';
// import img1 from '../../../assets/logo24.png';
// import img2 from '../../../assets/logo23.png';
// import img3 from '../../../assets/logo20-300x134.png';
// import img4 from '../../../assets/logo22.png';
// import img5 from '../../../assets/Untitled-design-4.png';
// import img6 from '../../../assets/logo21.png';
// import img7 from '../../../assets/logo17.png';
// import img8 from '../../../assets/logo16.png';

import Partners from './Partners';

const Partner = () => {
    return (
        <div className='section mt-28'>
            <div>
                <div className='section-title-group  mx-auto px-4 lg:px-10 text-center'>
                    <h5 className='text-secondary'>OUR PARTNER</h5>
                    <div className='flex justify-center'>
                    <i class="fa-solid fa-circle text-7xl text-[#FFD124] -right-[135px] -top-[5px] relative"></i>
                    <h2 className='text-4xl mt-3 mb-3 font-semibold relative -left-[40px]'>Official <span className='text-secondary'>Corporate</span> Partner</h2>
                    </div>
                    
                    <p className='mx-auto max-w-[550px]'>Our modern approach to marketing techniques, adoption of advanced technology and beyond all our strive for excellence make us the first choice</p>
                </div>
                <div className='m-10'>
                    <Partners />
                </div>
                {/* <div className='slide-body'>
                    <div className='slide'>
                        <div className='slide-track'>

                            <div className='slide'><img src={img1} alt="" /></div>
                            <div className='slide'><img src={img2} alt="" /></div>
                            <div className='slide'><img src={img3} alt="" /></div>
                            <div className='slide'><img src={img4} alt="" /></div>
                            <div className='slide'><img src={img5} alt="" /></div>
                            <div className='slide'><img src={img6} alt="" /></div>
                            <div className='slide'><img src={img7} alt="" /></div>
                            <div className='slide'><img src={img8} alt="" /></div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Partner