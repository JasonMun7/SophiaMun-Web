import { OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from 'three'

// Import Components 
import Cat from './catModel.jsx'

export default function Moon() {
  const moon = useGLTF('../../../moon.glb')
  const moonTexture = useTexture('../../../moonBaked.jpg')
  moonTexture.flipY = false

  return <>
    <OrbitControls
      enableZoom={false}
      autoRotate
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
    />
    {/* <Cat /> */}
    <mesh geometry={moon.nodes.baked.geometry} scale={0.4} position-y={0} rotation-y={0}>
      <meshBasicMaterial map={moonTexture} />
    </mesh>
  </>
}