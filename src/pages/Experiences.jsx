import React from 'react'
import SectionWrapper from '../hoc/SectionWrapper.jsx'
import { communityService } from '../constants'
import PlanetCanvas from '../components/planetCanvas.jsx'
import { motion } from 'framer-motion'
import { slideIn, textVariant } from '../utils/motion.js'

// Components
import Leadership from '../components/leadership.jsx'


function Experiences() {
    return <>
        <div className='flex flex-col'>
            <motion.div variants={textVariant()}>
                <p className='text-metal-gray tracking-widest font-semibold'>Some communiy service I have done</p>
                <div className="text-metal-gray text-8xl font-bold mt-4">Services</div>
            </motion.div>
            <motion.div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
                {communityService.map((service) => (
                    <div className='w-28 h-28' key={service.name}>
                        <PlanetCanvas icon={service.icon} description={service.description} />
                    </div>
                ))}
            </motion.div>
        </div>
        <Leadership />

    </>
}

export default SectionWrapper(Experiences, "Experiences")
