import React,{useState,useEffect,useRef} from 'react'
import { useThree,useFrame } from '@react-three/fiber';
import { useSphere } from '@react-three/cannon';

const Player = () => {
    const [sphereRef, api] = useSphere(() => ({
        mass: 100,
        fixedRotation: true,
        position: [0, 1, 0],
        args: 0.2,
        material: {
          friction: 0
        }
      }));
    const [forward,setForward] = useState(false);

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

    useFrame(() => {
        if (forward){
            api.velocity.set(10,0,0);
        }
        setForward(false)
    })
    
    return (
        <mesh ref={sphereRef}>
        <sphereBufferGeometry args={[1, 32, 32]} />
        <meshPhongMaterial color={"hotpink"} />
        </mesh>
    )
}

export default Player
