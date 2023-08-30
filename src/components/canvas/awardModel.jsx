import { Float, useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import React, { useEffect, useState, useRef } from 'react'

export default function Award() {

  const award = useGLTF('../../../award.glb')
  const awardTexture = useTexture('../../../awardTexture.jpg')
  awardTexture.flipY = false

  const awardRef = useRef()

  return <>
    <mesh ref={awardRef} geometry={award.nodes.baked.geometry} scale={0.25} position={[0, 3, 0]} rotation-x={-Math.PI / 2} rotation-y={Math.PI / 2}>
      <meshBasicMaterial map={awardTexture} />
    </mesh>
  </>
}