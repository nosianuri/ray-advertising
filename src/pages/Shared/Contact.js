import React from 'react';
import PrimaryButton from './PrimaryButton';
import reach from '../../assets/googlemap.jpg';

const Contact = () => {
  return (

    <div style={{
        background: `url(${reach})`
    }} className='px-10 py-14 flex items-center justify-center'>
    <div className='bg-base-200 w-[500px] p-8 rounded-2xl shadow-md'>
    <div className='text-center pb-5 '>
            <p className='text-4xl pb-3 font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary'>
            CONTACT US
            </p>
            <h1 className='text-xl'>We are here to help you grow your business</h1>
        </div>
        <div className='grid grid-cols-1 justify-items-center gap-5 '>
            <input
                type='text'
                placeholder='Email Address'
                className='input w-full max-w-md'
            />
            <input
                type='text'
                placeholder='Subject'
                className='input w-full max-w-md'
            />
            <textarea
                className='textarea w-full max-w-md'
                placeholder='Your message'
                rows={6}
            ></textarea>
            <PrimaryButton>Submit</PrimaryButton>
        </div>
    </div>
        
    </div>

//     <div style={{
//         background: `url(${reach})`
//     }} className='bg-primary px-14 py-14'>
//     <div>
// <div className='bg-primary pt-8 pb-8'>
// <div className='text-center pb-14  '>
//             <p className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary'>
//                 Contact Us
//             </p>
//             <h1 className='text-4xl text-white'>Stay connected with us</h1>
//         </div>
//         <div className='grid grid-cols-1 justify-items-center gap-5 '>
//             <input
//                 type='text'
//                 placeholder='Email Address'
//                 className='input w-full max-w-md'
//             />
//             <input
//                 type='text'
//                 placeholder='Subject'
//                 className='input w-full max-w-md'
//             />
//             <textarea
//                 className='textarea w-full max-w-md'
//                 placeholder='Your message'
//                 rows={6}
//             ></textarea>
//             <PrimaryButton>Submit</PrimaryButton>
//         </div>
// </div>

    

    
//     </div>
        
//     </div>
  )
}

export default Contact