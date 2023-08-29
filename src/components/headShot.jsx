import { Image, Float } from '@react-three/drei'
import React, { useRef } from 'react'


export default function HeadShot() {
    const picRef = useRef()

    return <>
        <Float speed={2}>
            {/* Frame */}
            <mesh position={[4, 0.75, 0.99]} scale={[3.4, 4, 0]} >
                <planeGeometry />
                <meshBasicMaterial color={"#FFFFFF"} />
            </mesh>

            {/* HeadShot Image */}
            <Image ref={picRef} url="../../headShot.jpg" position={[4, 0.75, 1]} scale={[3.2, 3.8, 0]} />
        </Float>
    </>
}