import React, { useState } from 'react'

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1);
    const tabs = [
        {
            id: 1,
            name: 'All views',
            title: 'Back-End Developer',
            job_type: 'Remote',
            job_time: 'Full time',
            job_link: 'https://forms.gle/VemiEsGcaRaw7v3p8',
            job_desc_link: 'https://docs.google.com/document/d/1Y028gSFMlvgL2ZjZq4lBlI3unvUQkkRAPCiXfF_odlw/mobilebasic',
            content: 'We are looking for a mid-level backend developer to join our team.',
        },
        {
            id: 2,
            name: 'Development',
            title: 'Back-End Developer',
            job_type: 'Remote',
            job_time: 'Full time',
            job_link: 'https://forms.gle/VemiEsGcaRaw7v3p8',
            job_desc_link: 'https://docs.google.com/document/d/1Y028gSFMlvgL2ZjZq4lBlI3unvUQkkRAPCiXfF_odlw/mobilebasic',
            content: 'We are looking for a mid-level backend developer to join our team.',
        },
        // {
        //     id: 3,
        //     name: 'Management',
        //     content: 'This is the content for Tab 3',
        // },
    ];
    return (
        <div className="bg-[#fff] py-6">
            <div className="container mx-auto">
                <div className="flex gap-5 flex-wrap md:flex-no-wrap mx-2 sm:mx-0">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`${activeTab === tab.id ? 'bg-[#45f3ff] text-[#003144]' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                                } font-medium text-sm px-4 py-2 rounded-t-md md:rounded-l-md md:rounded-t-none md:rounded-tr-md mb-2 md:mb-0`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                        <div>{tab.name}</div>
                        </button>
                    ))}
                </div>
                <div className="bg-white border border-[#fff] border-y-[#003144] mt-5 rounded-b-md sm:px-6 px-2 py-8 md:py-8">
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            className={`${activeTab === tab.id ? 'block' : 'hidden'
                                } pt-4`}
                        >
                            <div className='sm:flex justify-between'>
                                <div>
                                    <h1 className='text-[22px] font-bold'>{tab.title}</h1>
                                    <h4 className='mb-1'>{tab.content}</h4>
                                    <a href={tab.job_desc_link} target="_blank" >
                                    <h4 className='font-bold hover:underline hover:text-[#3acbd5]'>Job Description & Requirements <i class="fa-solid fa-arrow-up-right-from-square"></i></h4>
                                    </a>
                                    <div className='flex gap-5'>
                                        <div className='border w-[150px] text-center border-[#363535] rounded-full px-4 py-1 mt-5 flex gap-5'> <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                        </span> <span>{tab.job_type}</span> </div>
                                        <div className='border w-[150px] text-center border-[#363535] rounded-full px-4 py-1 mt-5 flex gap-5'> <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg></span> <span>{tab.job_time}</span>
                                        </div>
                                    </div>
                                </div>
                                <a href={tab.job_link} target="_blank">
                                <div className='text-[20px] font-bold flex sm:mt-0 mt-5 hover:text-[#3acbd5]'><span>Apply</span> <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg></span>
                                </div>
                                </a>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Tabs