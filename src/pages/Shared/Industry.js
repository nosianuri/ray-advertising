import React from 'react';
import industry1 from "../../assets/admin-ajax.png";

const Industry = () => {
    return (
        <div className='flex min-h-screen flex-col items-center justify-center bg-slate-100'>
            <div className='group h-80 w-80 [perspective:1000px]'>
                <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                    <div className='absolute inset-0'>
                        <img className='h-full w-full rounded-xl object-cover shadow-xl shadow-black/40' src={industry1} alt="" />
                    </div>
                    <div className='absolute inset-0 h-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                        <div className='flex min-h-full flex-col items-center justify-center'>
                            <h1 className='text-3xl font-bold'>Jane Doe</h1>
                            <p className='text-lg'>Photographer & Art</p>
                            <p className='text-base'>loremjsdfgjdsgjhdsfghdfdsgfdgh</p>
                            <button className='mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm [hover:bg-neutral-900]'>Read</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Industry