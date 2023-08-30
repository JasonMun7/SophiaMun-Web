import React from 'react'
import SectionWrapper from '../hoc/SectionWrapper.jsx'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion.js'
import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import * as THREE from 'three'

// Import Components
import Award from '../components/canvas/awardModel.jsx'

const Awards = () => {
    return <>
        <section className=''>
            <motion.div variants={textVariant()}>
                <p className='text-metal-gray tracking-widest font-semibold'>Some of My Awards</p>
                <div className="text-metal-gray text-8xl font-bold mt-4">Awards</div>
            </motion.div>
        </section>

        <section className='h-[1000px]'>
            <Canvas
                shadows
                gl={{ preserveDrawingBuffer: true }}
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [0, 0, 9],
                }}>
                <Award />
                <Preload all />
            </Canvas>
        </section>


    </>
}

export default SectionWrapper(Awards, "Awards")
