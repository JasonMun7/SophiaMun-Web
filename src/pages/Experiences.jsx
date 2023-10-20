import React, { useState } from 'react'
import SectionWrapper from '../hoc/SectionWrapper.jsx'
import { communityService } from '../constants'
import PlanetCanvas from '../components/canvas/planetCanvas.jsx'
import { motion } from 'framer-motion'
import { slideIn, textVariant } from '../utils/motion.js'

// Components
import Leadership from '../components/leadership.jsx'


function Experiences() {
    const [showInfo, setShowInfo] = useState(true)
    const [selectedService, setSelectedService] = useState(communityService[0])

    const handleClick = (service) => {
        setSelectedService(service)
        setShowInfo(true)
    }

    return <>
        <div className='flex flex-col'>
            <motion.div variants={textVariant()}>
                <p className='text-metal-gray tracking-widest font-semibold'>Play with the Orbs Below about the service I have done!</p>
                <div className="text-metal-gray text-5xl sm:text-8xl font-bold mt-4">Services</div>
            </motion.div>

            <section className='flex flex-col w-full bg-[#0b1328] bg-cover rounded-3xl  p-8 mt-10'>
                <motion.div className='flex flex-row flex-wrap justify-center gap-10'>
                    {communityService.map((service) => (
                        <div className='w-28 h-28' key={service.name} onClick={() => handleClick(service)}>
                            <PlanetCanvas icon={service.icon} description={service.description} />
                        </div>
                    ))}
                </motion.div>

                <p className='text-center mt-5 mb-5 text-metal-gray tracking-widest font-semibold'>Click for More Info^</p>

                <div className='w-full'>
                    {showInfo &&
                        <div className='flex flex-col sm:flex-row-reverse justify-between'>
                            <div className='mr-20 flex-none max-w-[280px] max-h-[280px] items-center'>
                                <img src={selectedService?.image} className='object-contain rounded-2xl' />
                            </div>

                            <div className='text-metal-gray sm:w-1/2'>
                                <div className="text-4xl sm:text-5xl font-bold mt-8">{selectedService.name}</div>
                                <div className='mt-5'>{selectedService?.description}</div>
                            </div>

                        </div>
                    }
                </div>
            </section>
        </div>
        <Leadership />

    </>
}

export default SectionWrapper(Experiences, "Experiences")
