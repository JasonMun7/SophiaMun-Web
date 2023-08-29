import { useGLTF, useTexture } from '@react-three/drei'

export default function Cat() {

    const { nodes } = useGLTF('../../cat.glb')
    const bakedCatTexture = useTexture('../../baked.jpg')
    bakedCatTexture.flipY = false

    return <>
        {/* Model of Cat */}
        <mesh geometry={nodes.baked.geometry} rotation-y={Math.PI * 0.8} position={[5, -0.5, 0]} scale={0.6}>
            <meshBasicMaterial map={bakedCatTexture} />
        </mesh>
    </>
}