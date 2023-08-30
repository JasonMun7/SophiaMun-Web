import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../../styles/styles.js'
import SectionWrapper from '../hoc/SectionWrapper.jsx'
import { fadeIn, textVariant } from '../utils/motion.js'
import { leadership } from '../constants'

import React, { useState, useEffect } from 'react'

// Components
const Card = ({ index, title, img, description }) => {
    const [learnMore, setlearnMore] = useState(true)

    const onClick = () => {
        setlearnMore(!learnMore)
    }

    return <>
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.8)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450
                }}
                className='bg-[#0b1328] p-5 rounded-2xl sm:w-[360px] h-[500px] w-full'
            >
                <div className='flex flex-col h-full justify-between'>
                    <div>
                        <div className='w-full h-[230px] relative'>
                            <img src={img} alt={title} className='w-full h-full object-cover rounded-2xl' />
                        </div>
                        <div className='mt-5'>
                            <h3 className='text-metal-gray font-bold text-[24px]'>{title}</h3>
                            {/* {!learnMore && <p className='mt-2 text-[14px]'>{description}</p>} */}
                            <p className='mt-2 text-[14px] text-metal-gray'>{description}</p>
                        </div>
                    </div>
                    {/* <div className="flex justify-center cursor-pointer" onClick={onClick}>
                        <p className='text-white text-[14px]'>{learnMore ? 'Learn More' : 'Show Less'}</p>
                    </div> */}
                </div>
            </Tilt>
        </motion.div>
    </>

}

function Leadership() {

    return <>
        <motion.div variants={textVariant()} className=''>
            <p className='text-metal-gray tracking-widest font-semibold'>Some leadership roles I have done</p>
            <div className="text-metal-gray text-8xl font-bold mt-4">Leadership</div>
        </motion.div>

        <div className='mt-20 flex flex-wrap gap-7'>
            {leadership.map((leader, index) => (
                <Card
                    key={`leader-${index}`}
                    index={index}
                    {...leader} />
            ))}

        </div>


    </>
}

export default SectionWrapper(Leadership, "")