import React, { useRef, Suspense } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';
import { Stars, Preload, } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'
import { motion } from 'framer-motion'
import '../../styles/style.css'



// Import Component
import Greeting from '../components/greeting.jsx'
import ShootingStar from '../components/shootingStar.jsx'

// Function in order to control the camera with mouse
function CameraControls() {
  const cameraRef = useRef();

  useFrame(({ mouse, camera }) => {
    cameraRef.current = camera;

    const targetX = mouse.x * 0.5;
    const targetY = mouse.y * 0.5;
    camera.position.x += (targetX - camera.position.x) * 0.01;
    camera.position.y += (targetY - camera.position.y) * 0.01;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function Experience() {

  return (
    <>
      <section className='relative w-full h-screen mx-auto bg-blue-gradient'>
        <Canvas
          flat
          shadows
          gl={{
            antialias: false,
            toneMapping: THREE.ACESFilmicToneMapping,
            preserveDrawingBuffer: true
            // outputColorSpace: THREE.SRGBColorSpace
          }}
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [0, 0, 10]
          }}
        >
          {/* <CameraControls /> */}
          <ShootingStar />
          <Stars radius={50} count={1200} factor={5} saturation={false} fade speed={3} />
          <Greeting />
          <Preload all />
          <EffectComposer>
            <Bloom mipmapBlur luminanceThreshold={1} />
          </EffectComposer>
        </Canvas>

        <div className="absolute flex flex-col sm:bottom-10 bottom-32 w-full justify-center items-center">
          <a href="#About">
            <div className='w-[35px] h-[64px] rounded-3xl border-4 flex justify-center items-start p-2 '>
              <motion.div
                animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className="w-3 h-3 rounded-full bg-white mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
