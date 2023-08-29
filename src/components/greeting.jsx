import { useEffect, useState } from 'react'
import { Text3D, Text, useMatcapTexture, Image, QuadraticBezierLine } from '@react-three/drei';

// import Components
import Rocket from './rocketModel'
import HeadShot from './headShot'
import Header from './headerText'

export default function Greeting() {
    const [isMobile, setIsMobile] = useState(false)

    // Determine if it is a mobile device
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 500px)')

        setIsMobile(mediaQuery.matches)

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches)
        }

        mediaQuery.addEventListener('change', handleMediaQueryChange)

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange)
        }
    }, [])


    return <>
        <Header isMobile={isMobile} />
        <HeadShot />
        <Rocket />
    </>
}