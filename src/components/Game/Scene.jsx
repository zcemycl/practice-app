import React,{Suspense,useEffect,useRef} from 'react'
import { Background,City,Player,Plane } from './Prefabs'
import { extend,useThree } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei'
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
        camera.position.y = 4
        camera.position.z = 0
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
        {/* <OrbitControls/> */}
        <directionalLight position={[3, 0, 3]} intensity={0.5} castShadow />
        <pointLight position={[0, 0, -3]} intensity={0.6} castShadow />
        <pointLight position={[0, 0, 4]} intensity={0.6} castShadow />

        <ambientLight intensity={0.6} />

        <Physics>
        <Suspense fallback={null}>
            
            <City/>
            <Plane color='#dcce71' opacity={0}
                rotation={[Math.PI,0,0]}
                position={[100,0,70]} />
            <Plane color='#dcce71' opacity={0}
                rotation={[0,0,0]} 
                position={[100,0,-70]} />
            <Plane color='#dcce71' opacity={0}
                rotation={[0,-Math.PI/2,0]}
                position={[230,0,-70]}/>
            <Plane color='#dcce71' opacity={0}
                rotation={[0,Math.PI/2,0]} 
                position={[-30,0,-70]}/>
            <Player />
        </Suspense>
        </Physics>
        </>
    )
}

