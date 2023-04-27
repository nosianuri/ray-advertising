import React, { useEffect } from 'react';
import img from '../../../assets/grow.jpg';
import Faq from '../../../components/faq/Faq';
import './Faq.css';
import AOS from 'aos';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';


const Faqs = () => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm();


    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const onSubmit = formData => {

        const data = {
            name: formData.name,
            email: formData.email,
            phone_number: formData.number,
            content: formData.message,
        }
        console.log(data);
        fetch('https://email.rayadvertising.com/api/send-email', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('succesfuly post data');
                    reset();
                }
                else {
                    toast.error('Something is wrong');
                }

            })
    }


    return (
        <div>
            <div className='lg:relative w-full h-full lg:pb-[500px] pb-8'>
                <img className='' src={img} alt="" />
                <div className='lg:absolute lg:top-[200px] lg:w-full lg:h-full lg:left-0'>
                    <div className='lg:w-full lg:h-full'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 lg:mx-28 lg:gap-10 justify-center '>

                            <div className="lg:pt-[170px]  xl:pt-[250px]" id='faqs'>
                                <Faq />
                            </div>
                            <div className='mx-2'>
                                <form class="box" onSubmit={handleSubmit(onSubmit)}>
                                    <div class="form">
                                        <h2 className='text-3xl bg-[#45f3ff] !text-[#003144] py-1'>Sign in</h2>
                                        <div class="inputBox">
                                            <input type="text"

                                                {...register("name", {
                                                    required: {
                                                        value: true,
                                                        message: 'Name is required'
                                                    },
                                                    minLength: {
                                                        value: 3,
                                                        message: 'Must be 3 characters longer'
                                                    }
                                                })}
                                                required />
                                            
                                            <span>Your Name*</span>
                                            <i></i>

                                        </div>
                                        <div class="inputBox">
                                            <input
                                                type="email"

                                                {...register("email", {
                                                    required: {
                                                        value: true,
                                                        message: 'Email is required'
                                                    },

                                                })}
                                                required />
                                            <span>Your Email*</span>
                                            <i></i>

                                        </div>
                                        <div class="inputBox">
                                            <input type="number"

                                                {...register("number", {
                                                    required: {
                                                        value: true,
                                                        message: 'Number is required'
                                                    },
                                                    maxLength: {
                                                        value: 13,
                                                        message: 'Must be 13 characters longer'
                                                    }
                                                })}
                                                required />
                                            <span>Your Number*</span>
                                            <i></i>

                                        </div>
                                        <div class="inputBox">
                                            <input type="text"
                                                {...register("message", {
                                                    required: {
                                                        value: true,
                                                        message: 'Message is required'
                                                    },

                                                })}
                                                required />
                                            <span>Enter your message</span>
                                            <i></i>

                                        </div>
                                        
                                        <input type="submit" value="SUBMIT MESSAGE" />
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Faqs;