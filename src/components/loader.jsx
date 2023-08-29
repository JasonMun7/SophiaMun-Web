import { Html, useProgress } from '@react-three/drei'


export default function CanvasLoader() {

    const { progress } = useProgress()

    return <>
        <Html>

            <span className="canvas-load"></span>
            <p
                style={{
                    fontsize: '14px',
                    color: '#f1f1f1',
                    fontWeight: '800',
                    marginTop: '40px'
                }}>
                {progress}%</p>
        </Html>
    </>
}