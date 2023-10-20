import React, { useState, useRef } from 'react'
import SectionWrapper from '../hoc/SectionWrapper.jsx'
import { slideIn } from '../utils/motion.js'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'

// Components
import Moon from '../components/canvas/moonModel.jsx'

const Contacts = () => {
    const [loading, setLoading] = useState(false)
    const [emailForm, setemailForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const emailFormRef = useRef()

    const changeHandler = (e) => {
        const { name, value } = e.target
        setemailForm({ ...emailForm, [name]: value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true);

        // Define EmailJS service, template, and user IDs
        const serviceId = "YOUR_SERVICE_ID";
        const templateId = "YOUR_TEMPLATE_ID";
        const userId = "YOUR_USER_ID";

        // Define email parameters based on your EmailJS template
        const emailParams = {
            to_name: "Recipient Name",
            to_email: "123@gmail.com",
            from_name: emailForm.name,
            from_email: emailForm.email,
            message: emailForm.message,
        };

        // Send the email
        emailjs.send(serviceId, templateId, emailParams, userId)
            .then(response => {
                console.log('Email successfully sent!', response.status, response.text);
                setLoading(false);
            })
            .catch(err => {
                console.error('Email send failed:', err);
                setLoading(false);
            });
    };


    return <>
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden ">
            <motion.div variants={slideIn('left', "tween", 0.2, 1)} className='flex-[0.75] bg-[#101B38] p-8 rounded-2xl'>
                <p className='text-metal-gray tracking-widest font-semibold'>LETS GET IN TOUCH</p>
                <div className="text-metal-gray text-7xl font-bold mt-4">Contact.</div>
                <form ref={emailFormRef} onSubmit={submitHandler} className='mt-12 flex flex-col gap-8'>
                    <label className='flex flex-col'>
                        <span className='text-white font-semibold mb-4'>What's Your Name?</span>
                        <input
                            type='text'
                            name='name'
                            value={emailForm.name}
                            onChange={changeHandler}
                            placeholder='Who is getting in touch?'
                            className='bg-blue py-4 px-6 placeholder:text-metal-gray rounded-lg outlined-none border-none font-semibold'></input>
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-semibold mb-4'>What's Your Email?</span>
                        <input
                            type='email'
                            name='email'
                            value={emailForm.email}
                            onChange={changeHandler}
                            placeholder='What is your email?'
                            className='bg-blue py-4 px-6 placeholder:text-metal-gray rounded-lg outlined-none border-none font-semibold'></input>
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-semibold mb-4'>What's Your Message?</span>
                        <textarea
                            rows="8"
                            name='message'
                            value={emailForm.message}
                            onChange={changeHandler}
                            placeholder='What message do you want to send?'
                            className='bg-blue py-4 px-6 placeholder:text-metal-gray rounded-lg outlined-none border-none font-semibold'></textarea>
                    </label>

                    <button
                        type='submit'
                        className='bg-[#000428] py-3 px-8 outline-none w-fit text-white shadow-lg font-semibold shadow-primary rounded-xl '
                    >
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
            >
                <Canvas
                    shadows
                    frameloop='demand'
                    dpr={[1, 2]}
                    gl={{ preserveDrawingBuffer: true }}
                    camera={{
                        fov: 45,
                        near: 0.1,
                        far: 200,
                        position: [-4, 3, 6],
                    }}
                >
                    <Moon />
                    <Preload all />
                </Canvas>
            </motion.div>
        </div>
    </>
}

export default SectionWrapper(Contacts, "Contacts")