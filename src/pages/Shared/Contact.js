import React from 'react';
import PrimaryButton from './PrimaryButton';
import reach from '../../assets/googlemap.jpg';

const Contact = () => {
  return (

    <div style={{
        background: `url(${reach})`
    }} className='px-10 py-14 flex items-center justify-center'>
    <div className='bg-white w-[500px] p-8 rounded-2xl shadow-md'>
    <div className='text-center pb-5 '>
            <p className='text-4xl pb-3 font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary'>
            CONTACT US
            </p>
            <h1 className='text-xl'>We are here to help you grow your business</h1>
        </div>
        <div className=''>
            <div className='mt-10 relative'>
                <input
                 type="text"
                  id='email'
                   name='email'
                   className='peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none placeholder-transparent focus:border-blue-600' placeholder='Email address' />
                <label htmlFor="email" className='absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm' >Email Address</label>
            </div>
            <div className='mt-10 relative'>
                <input
                id='password'
                 type="password"
                 name='password' 
                 className='peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600' placeholder='Password' />
                <label htmlFor="password" className='absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>Password</label>
            </div>
            <div className='mt-10 relative'>
                <input
                 type="text"
                  id='message'
                   name='massage'
                   className='peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none placeholder-transparent focus:border-blue-600' placeholder='Your message' />
                <label htmlFor="message" className='absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm' >Your message</label>
            </div>
            <div className='flex items-center justify-center'>
                <button type='button' className='btn btn-secondary uppercase text-white font-bold mt-4  px-16'>Submit</button>
            </div>
        </div>
        {/* <div className='grid grid-cols-1 justify-items-center gap-5 '>
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
        </div> */}
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