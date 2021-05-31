import React,{useState,useEffect,useRef} from 'react'
import { useThree,useFrame } from '@react-three/fiber';
import { useSphere } from '@react-three/cannon';
import { Vector3 } from "three";

const Player = () => {
    const { camera } = useThree();
    const [sphereRef, api] = useSphere(() => ({
        mass: 100,
        fixedRotation: true,
        position: [0, 2, 0],
        args: 0.2,
        material: {
          friction: 0
        }
      }));
    const pos = useRef([0,2,0])
    const [forward,setForward] = useState(false);
    const state = useRef({
        timeToShoot: 0,
        timeTojump: 0,
        vel: [0, 0, 0],
        jumping: false
      });
    
    useEffect(() => {
    api.velocity.subscribe((v) => (state.current.vel = v));
    }, [api]);


    const handleKeydown = (e) => {
        if (e.key==='w'){
            setForward(true)
        }
    }

    useEffect(() => {
        document.addEventListener("keydown",handleKeydown);
        return () => {
            document.removeEventListener("keydown",handleKeydown)
        }
    },[])

    useEffect(() => api.position.subscribe((p)=>(pos.current=p)),[])

    useFrame(() => {
        
        if (forward){
            let cameraDirection = new Vector3();
            camera.getWorldDirection(cameraDirection);
            const {x,z} = cameraDirection;
            // console.log(cameraDirection)
            api.velocity.set(x/Math.abs(x)*10,0,
                z/Math.abs(z)*10);
            camera.position.set(sphereRef.current.position.x,
                sphereRef.current.position.y+30,
                sphereRef.current.position.z-10)
        }
        setForward(false)
    })
    
    return (
        <mesh ref={sphereRef}>
        <sphereBufferGeometry args={[1, 1, 1]} />
        <meshPhongMaterial color={"hotpink"} />
        </mesh>
    )
}

export default Player
