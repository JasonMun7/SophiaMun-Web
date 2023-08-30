import React from 'react'
import { styles } from '../../styles/styles.js'
import { motion } from 'framer-motion'
import { staggerContainer } from '../utils/motion.js'


const SectionWrapper = (Component, idName) => {

    function HOC() {

        return (
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-[1300px] mx-auto relative z-0 mt-40`}>
                <span className="hash-span" id={idName}>
                </span>
                <Component />
            </motion.section>
        )
    }
    return HOC

}
export default SectionWrapper