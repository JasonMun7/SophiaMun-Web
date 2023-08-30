import React from 'react'
import SectionWrapper from '../hoc/SectionWrapper.jsx'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion.js'
import { Canvas } from '@react-three/fiber'
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

        <section className='h-[500px]'>
            <Canvas
                shadows
                frameloop='demand'
                dpr={[1, 2]}
                gl={{ preserveDrawingBuffer: true }}
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [0, 0, 10],
                }}>
                <Award />
            </Canvas>
        </section>


    </>
}

export default SectionWrapper(Awards, "Awards")
