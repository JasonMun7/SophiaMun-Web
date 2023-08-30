import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, Decal, Preload, useTexture, Html } from '@react-three/drei'


const Planet = (props) => {
    const [decal] = useTexture([props.imgUrl])
    return <>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
            <ambientLight intensity={0.3} />
            <directionalLight intensity={3} position={[0, 0, 0.1]} />
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color="#FFFFFF"
                    flatShading
                    polygonOffset
                    polygonOffsetFactor={-5}
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    flatShading
                    map={decal}
                />
            </mesh>
        </Float>
    </>
}


const PlanetCanvas = ({ icon, description }) => {

    return <>
        <Canvas
            gl={{ preserveDrawingBuffer: true }}
        >
            <OrbitControls
                enableZoom={false}
            />
            <Planet imgUrl={icon} description={description} />
            <Preload all />
        </Canvas>
    </>
}
export default PlanetCanvas