import React from 'react'
import SectionWrapper from '../hoc/SectionWrapper.jsx'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion.js'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'


const Awards = () => {
    return <>
        <section className=''>
            <motion.div variants={textVariant()}>
                <p className='text-metal-gray tracking-widest font-semibold'>Some of My Awards</p>
                <div className="text-metal-gray text-8xl font-bold mt-4">Awards</div>
            </motion.div>
        </section>

        <section>
            <Canvas>

            </Canvas>
        </section>


    </>
}

export default SectionWrapper(Awards, "Awards")
