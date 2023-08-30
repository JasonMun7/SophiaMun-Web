import { Float, useGLTF, useTexture, Text3D, useMatcapTexture, Center } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import React, { useEffect, useState, useRef } from 'react'

import { awards } from '../../constants/index.jsx'

export default function Award() {

  const award = useGLTF('../../../award.glb')
  const awardTexture = useTexture('../../../awardTexture.jpg')
  awardTexture.flipY = false

  const [matCapTexture] = useMatcapTexture('28292A_D3DAE5_A3ACB8_818183', 256);

  const groupRef = useRef()
  const awardRef = useRef()

  const numAwards = 5;
  const radius = 2.1;

  return (
    <>
      <group ref={groupRef} position={[0, 0, 0]}>
        {Array.from({ length: Math.min(awards.length, numAwards) }).map((_, i) => {
          const angle = (i / numAwards) * 2 * Math.PI + Math.PI / 2
          const x1 = Math.cos(angle) * radius
          const y1 = Math.sin(angle) * radius + 1.3
          return (
            <Float key={i} speed={3} floatIntensity={1}>
              <mesh ref={awardRef} geometry={award.nodes.baked.geometry} scale={0.13} position={[x1, y1, 1]} rotation-x={-Math.PI / 2} rotation-y={Math.PI / 2}>
                <meshBasicMaterial map={awardTexture} />
              </mesh>
              <Text3D
                font="../../helvetiker_regular.typeface.json"
                scale={0.15}
                position={awards[i].position}
              >
                {awards[i].description}
                <meshMatcapMaterial matcap={matCapTexture} />
              </Text3D >
            </Float>
          );
        })}
      </group>
    </>
  );
}
