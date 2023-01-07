import React, { useEffect, useRef } from 'react';
import './CoreFeatures.css';
import img1 from '../../../assets/icon2-1.gif';
import img2 from '../../../assets/icon2-2.gif';
import img3 from '../../../assets/icon2-4.gif';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


// gsap.registerPlugin(ScrollTrigger);
   


const CoreFeatures = () => {
   
   
// gsap.utils.toArray('.section').forEach((section, i) => {
//     ScrollTrigger.create({
//         trigger: section,
//         start: 'top top',
//         pin: true,
//         pinSpacing: false,
//         snap: 1,
//     });
//     gsap.from(section.children, {
//         y:50,
//         opacity: 0, 
//         scrollTrigger: {
//             trigger: section,
//             start: "top center",
//             end: "top top",
//             toggleActions: "play none reverse reset",
//         },
//     });
// });
    

    return (
        <div className=''>
            <section className="section bg-base-200 shadow-lg !mx-auto">
                <div className="containerf">
                    <div className="column-left">
                        <img src={img1} alt="food" className="image" />
                    </div>
                    <div className="column-right one">

                        <h1 className="text">PAY PER CALL</h1>
                        <p className="text">Pay-per-call is a type of performance marketing where an advertiser pays publishers (also known as affiliates or distribution partners) for quality calls generated on the advertiser’s behalf.</p>
                        <button
                            padding="10px 15px"
                            color="#e64100"
                            size="lg"
                            border-color="#e64100"
                            border-radius="5px"
                            width="100%"
                            fontSize="18px"
                            margin="0px auto 20px auto"
                            variant="outline-light"
                            id="action-btn"
                        >
                            Learn More!
                        </button>

                    </div>
                </div>
            </section>

            <section className="section bg-base-200 shadow-lg mt-5 !mx-auto">
                <div className="containerf">
                    <div className="column-left">
                        <img src={img2} alt="food" className="image" />
                    </div>
                    <div className="column-right two">
                        <h1 className="text">LEAD GENERATION</h1>
                        <p className="text">lead generation is the initiation of consumer interest or enquiry into products or services of a business. A lead is the contact information and, in some cases, demographic information of a customer who is interested in a specific product or service.</p>
                        <button
                            padding="10px 15px"
                            color="#e64100"
                            size="lg"
                            border-color="#e64100"
                            border-radius="5px"
                            width="100%"
                            fontSize="18px"
                            margin="0px auto 20px auto"
                            variant="outline-light"
                            id="action-btn"
                        >
                            Learn More!
                        </button>
                    </div>
                </div>
            </section>
            <section className="section bg-base-200 shadow-lg mt-8 !mx-auto">
                <div className="containerf">
                    <div className="column-left">

                        <img src={img3} alt="food" className="image" />

                    </div>
                    <div className="column-right three">
                        <h1 className="text">AFFILIATE NETWORK</h1>
                        <p className="text">Affiliate marketing is a marketing arrangement in which affiliates receive a commission for each visit, signup or sale they generate for a merchant. This arrangement allows businesses to outsource part of the sales process.</p>
                        <button
                            padding="10px 15px"
                            color="#e64100"
                            size="lg"
                            border-color="#e64100"
                            border-radius="5px"
                            width="100%"
                            fontSize="18px"
                            margin="0px auto 20px auto"
                            variant="outline-light"
                            id="action-btn"
                        >
                            Learn More!
                        </button>
                    </div>
                </div>
            </section>


            
        </div>
    )
}

export default CoreFeatures;