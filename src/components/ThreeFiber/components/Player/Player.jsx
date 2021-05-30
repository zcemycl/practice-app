import React,{useEffect,useRef} from 'react'
import { Vector3 } from "three";
import { useSphere } from "@react-three/cannon"
import { useFrame,useThree } from "react-three-fiber";

export const Player = () => {
    const [sphereRef, api] = useSphere(() => ({
        mass: 100,
        fixedRotation: true,
        position: [0, 1, 0],
        args: 0.2,
        material: {
          friction: 0
        }
      }));
    
    const {camera} = useThree();

    const state = useRef({
        timeToShoot: 0,
        timeTojump: 0,
        vel: [0, 0, 0],
        jumping: false
      });

    useEffect(() => {
        api.velocity.subscribe((v) => (state.current.vel = v));
      }, [api]);

    useFrame(()=>{
        let cameraDirection = new Vector3();
        camera.getWorldDirection(cameraDirection);
        camera.position.set(
            sphereRef.current.position.x,
            sphereRef.current.position.y + 1,
            sphereRef.current.position.z
        );
    })

    return (
        <>
        <mesh ref={sphereRef}>
        <sphereBufferGeometry args={[1, 32, 32]} />
        <meshPhongMaterial color={"hotpink"} />
        </mesh>   
        </>
    )
}

