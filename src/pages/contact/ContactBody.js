import React from 'react';
import Faq from '../../components/faq/Faq';
import { motion } from 'framer-motion';
import { fadeIn } from '../../shared/variants';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const ContactBody = () => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
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
            <div className='mx-auto relative '>
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:ml-32 lg:mr-28  overflow-hidden gap-10 pt-10 '>
                    <div className='pt-10 '>
                        <motion.div
                            variants={fadeIn('right', 'tween', 0.2, 1.8)}
                            initial='hidden'
                            whileInView={'show'}
                        >
                            <Faq />
                        </motion.div>
                    </div>
                    <div className=' mb-16 mx-5'>

                        <form class="box" onSubmit={handleSubmit(onSubmit)}>
                            <div class="form" >
                                <h2 className='text-3xl  text-center bg-[#45f3ff] !text-[#003144]'>Sign in</h2>
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
    )
}

export default ContactBody