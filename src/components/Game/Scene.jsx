import React,{Suspense,useEffect,useRef} from 'react'
import { Background,Plane,Player } from './Prefabs'
import { extend,useThree } from '@react-three/fiber';
// import { PointerLockControls } from '@react-three/drei'
import {PointerLockControls} from 'three/examples/jsm/controls/PointerLockControls'
import { Physics } from '@react-three/cannon'

extend({ PointerLockControls })

const CameraControls = () => {
    const { camera, gl } = useThree();
    const controls = useRef();
    const handleFocus = () => {
        if (controls){
            controls.current.lock();
        }
    };

    useEffect(() => {
        camera.layers.enable(0);
        camera.layers.enable(1);
    }, [camera]);

    useEffect(() => {
        document.addEventListener("click", handleFocus);
        return () => document.removeEventListener("click", handleFocus);
    }, [gl]);


    return (
        <pointerLockControls
            ref={controls}
            args={[camera,gl.domElement]}
        />
    )
}


export const Scene = () => {
    
    return (
        <>
            <Background/>
            <CameraControls/>
            <directionalLight position={[3, 0, 3]} intensity={0.5} castShadow />
            <pointLight position={[0, 0, -3]} intensity={0.6} castShadow />
            <pointLight position={[0, 0, 4]} intensity={0.6} castShadow />

            <ambientLight intensity={0.6} />

            <Physics>
            <Suspense fallback={null}>
                <Player />
                <Plane color='#dcce71'/>
            </Suspense>
            </Physics>
            
            
        </>
    )
}

