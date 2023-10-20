import { Text3D, Trail, useMatcapTexture, Float, Center } from '@react-three/drei';
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

export default function Header({ isMobile }) {
    const [matCapTexture] = useMatcapTexture('28292A_D3DAE5_A3ACB8_818183', 256);

    return <>
        <Float
            speed={4}
            floatIntensity={3}
            floatingRange={[-0.05, 0.05]}>
            <Text3D
                size={isMobile ? 0.2 : 1}
                font="../../helvetiker_regular.typeface.json"
                position={isMobile ? [-1., 0, 0] : [-6, 1.5, 0]}
                rotation-y={isMobile ? 0 : Math.PI * 0.05}
                lineHeight={0.9}
                bevelEnabled={true}
                bevelThickness={0.2}
                curveSegments={12}
                bevelSize={0.02}
                bevelOffset={0}
                bevelSegments={5}
            >
                {`Hello! I'm \nSophia Mun!`}
                <meshMatcapMaterial matcap={matCapTexture} />
            </Text3D >

            <Text3D
                size={isMobile ? 0.1 : 0.3}
                font="../../helvetiker_regular.typeface.json"
                rotation-y={isMobile ? 0 : Math.PI * 0.05}
                position={isMobile ? [-1., -0.5, 0] : [-5.5, -0.8, 0]}
                bevelEnabled={true}
                bevelThickness={0.1}
                curveSegments={12}
                bevelSize={0.005}
                bevelOffset={0}
                bevelSegments={5}
            >
                {`A Senior at Hillcrest High School!`}
                <meshMatcapMaterial matcap={matCapTexture} />
            </Text3D>
        </Float >

    </>
}