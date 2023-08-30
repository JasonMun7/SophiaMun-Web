import { useEffect, useRef } from 'react'
import { useGLTF, useTexture, Float, OrbitControls } from '@react-three/drei'

export default function RocketIdle() {

    const rocket = useGLTF('../../moonRocket.glb')
    const cat = useGLTF('../../cat.glb')

    const rocketTexture = useTexture('../../rocketBacked.jpg')
    rocketTexture.flipY = false
    const catTexture = useTexture('../../baked.jpg')
    catTexture.flipY = false


    return <>
        <Float position={[0, -1, 2]}>
            <mesh geometry={rocket.nodes.baked.geometry} scale={0.6} rotation-y={Math.PI * 0.15} rotation-x={0} >
                <meshBasicMaterial map={rocketTexture} />
            </mesh>
        </Float>

        <Float position={[1, 1, 2]} rotation={[Math.PI / 3.5, 0, 0]} rotationIntensity={4} floatIntensity={3} speed={1.5}>
            <mesh geometry={cat.nodes.baked.geometry} scale={0.3} rotation-y={Math.PI} >
                <meshBasicMaterial map={catTexture} />
            </mesh>
        </Float>

        <Float rotationIntensity={5} floatIntensity={3} speed={3} position={[-2, 2, -3]}>
            <mesh>
                <torusKnotGeometry />
                <meshNormalMaterial />
            </mesh>
        </Float>
    </>
}