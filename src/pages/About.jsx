import React from 'react'
import { motion } from 'framer-motion'
import '../../styles/styles.js'
import { fadeIn, textVariant } from '../utils/motion.js'
import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import * as THREE from 'three'

// Components
import RocketIdle from '../components/canvas/rocketIdle.jsx'
import SectionWrapper from '../hoc/SectionWrapper.jsx'

function About() {
    return <>
        <section className='sm:bg-black-hole-gradient'>
            <div className="flex flex-row flex-wrap">
                <div className='flex flex-col'>
                    <motion.div variants={textVariant()}>
                        <p className='text-metal-gray tracking-widest font-semibold '>Introduction</p>
                        <h2 className="text-metal-gray text-5xl sm:text-8xl font-bold mt-4">Overview</h2>
                    </motion.div>

                    <motion.p variants={fadeIn("", "", 0.1, 1)} className='text-metal-gray  max-w-2xl sm:max-w-4xl text-xl mt-4 leading-[40px]'>
                        Im a senior at Hillcrest high School! Im a very outgoing
                        person and I love to be with my friends constantly!
                        I also like to get involved with my community especially
                        trying to get more people to be involved as well as fund
                        certain areas of the community. I also enjoy going outside
                        and doing any sort of activity that I can put my hands on.
                        I really enjoy anything Im asked to do!
                    </motion.p>
                </div>


                <section className='flex flex-grow'>
                    <Canvas
                        className='max-w-[1300px]'
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
                        <Preload all />
                    </Canvas>
                </section>
            </div>
        </section>
    </>
}
export default SectionWrapper(About, "About")
