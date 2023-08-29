import React from 'react'
import { motion } from 'framer-motion'
import '../../styles/styles.js'
import { fadeIn, textVariant } from '../utils/motion.js'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'

// Components
import RocketIdle from '../components/rocketIdle.jsx'
import SectionWrapper from '../hoc/SectionWrapper.jsx'

function About() {
    return <>
        <section className='bg-black-hole-gradient'>
            <div className="flex flex-row ">
                <div className='flex flex-col'>
                    <motion.div variants={textVariant()}>
                        <p className='text-metal-gray tracking-widest font-semibold '>Introduction</p>
                        <h2 className="text-metal-gray text-8xl font-bold mt-4">Overview</h2>
                    </motion.div>

                    <motion.p variants={fadeIn("", "", 0.1, 1)} className='text-metal-gray  max-w-4xl text-xl mt-4 leading-[40px]'>
                        Her extensive perceived may any sincerity extremity.
                        Indeed add rather may pretty see.
                        Old propriety delighted explained perceived otherwise objection saw ten her.
                        Doubt merit sir the right these alone keeps.
                        By sometimes intention smallness he northward.
                        Consisted we otherwise arranging commanded discovery it explained.
                        Does cold even song like two yet been.
                        Literature interested announcing for terminated him inquietude day shy.
                        Himself he fertile chicken perhaps waiting if highest no it.
                        Continued promotion has consulted fat improving not way.
                    </motion.p>
                </div>


                <section className='flex flex-grow'>
                    <Canvas
                        className='w-full'
                        flat
                        shadows
                        gl={{
                            antialias: false,
                            toneMapping: THREE.ACESFilmicToneMapping,
                            preserveDrawingBuffer: true
                            // outputColorSpace: THREE.SRGBColorSpace
                        }}
                    >
                        <RocketIdle />
                    </Canvas>
                </section>
            </div>
        </section>
    </>
}
export default SectionWrapper(About, "About")
