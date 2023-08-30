import { Trail } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import React, { useState, useEffect, useRef } from 'react'

export default function ShootingStar() {
    const starRefOne = useRef()


    // Animate Shooting Star
    useFrame((state, delta) => {
        const time = state.clock.getElapsedTime();;

        const x = 4 * Math.sin(time) - 2.5;
        const y = 2.5 * Math.cos(time) + 1;
        const z = -1;

        starRefOne.current.position.set(x, y, z);
    })

    return <>
        {/* Shooting Star */}
        <Trail width={1.5} length={5} color={new THREE.Color('#FFFFFF')} attenuation={(time) => time * time}>
            <mesh ref={starRefOne} position={[-8, 5, -1]}>
                <sphereGeometry args={[0.05]} />
                <meshStandardMaterial emissive="white" emissiveIntensity={2} toneMapped={false} />
            </mesh>
        </Trail>
    </>
}