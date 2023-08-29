import { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations, useTexture, Float } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Rocket() {
    const rocket = useGLTF('../../moonRocket.glb')
    const cat = useGLTF('../../cat.glb')

    const groupRef = useRef()

    const rocketTexture = useTexture('../../rocketBacked.jpg')
    rocketTexture.flipY = false
    const bakedCatTexture = useTexture('../../baked.jpg')
    bakedCatTexture.flipY = false

    useFrame((state, delta) => {
        const time = state.clock.getElapsedTime()
        if (time < 12) {
            groupRef.current.position.x -= delta * 3
            groupRef.current.rotation.x = -Math.sin(time) * 0.5;
        }
    })

    const animations = useAnimations(rocket.animations, rocket.scene)

    useEffect(() => {
        const action = animations.actions.fly
        action.play()
    }, [])

    console.log(rocket)


    return <>
        <Float speed={3} floatIntensity={3}>
            <group ref={groupRef}>
                <mesh geometry={rocket.nodes.baked.geometry} rotation-y={Math.PI * 1.6} rotation-z={Math.PI * -0.15} position={[10, -2.5, -2]} scale={0.5}>
                    <meshBasicMaterial map={rocketTexture} />
                </mesh>

                {/* Model of Cat */}
                <mesh geometry={cat.nodes.baked.geometry} rotation-y={Math.PI * 0.8} position={[10, -1.8, -2]} scale={0.3}>
                    <meshBasicMaterial map={bakedCatTexture} />
                </mesh>
            </group>
        </Float>
    </>
}