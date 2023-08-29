import React, { useState, useRef } from 'react'
import SectionWrapper from '../hoc/SectionWrapper.jsx'
import { slideIn } from '../utils/motion.js'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'


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
        e.preventDefault()
        setLoading(true)

        emailjs.send()
    }

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
        </div>
    </>
}

export default SectionWrapper(Contacts, "Contacts")