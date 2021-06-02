import React,{useState,useEffect,useRef} from 'react'
import { useThree,useFrame } from '@react-three/fiber';
import { useSphere } from '@react-three/cannon';
import { Vector3 } from "three";
import { Bullet } from './Bullet/Bullet'

const Player = () => {
    const { camera } = useThree();
    const [bullets, setBullets] = useState([]);
    const [sphereRef, api] = useSphere(() => ({
        mass: 1,
        fixedRotation: true,
        position: [0, 2, 0],
        // args: 0.2,
        material: {
          friction: 0
        },
      }));
    const pos = useRef([0,2,0])
    const [forward,setForward] = useState(false);
    const [shoot,setShoot] = useState(false);
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

    const handleMouseUp = (e) => {
        setShoot(true)
        // console.log(e)
    }

    useEffect(() => {
        const canvas = document.querySelector('div.MuiGrid-root');
        canvas.addEventListener("mouseup",handleMouseUp);
        return () => {
            canvas.removeEventListener("mouseup",handleMouseUp)
        }
    },[])

    useEffect(() => api.position.subscribe((p)=>(pos.current=p)),[api.position])

    useFrame(() => {
        let cameraDirection = new Vector3();
        camera.getWorldDirection(cameraDirection);
        if (forward){  
            const {x,z} = cameraDirection;
            // console.log(cameraDirection)
            api.velocity.set(x/Math.abs(x)*10,0,
                z/Math.abs(z)*10);
            camera.position.set(sphereRef.current.position.x,
                sphereRef.current.position.y+2,
                sphereRef.current.position.z)
            setForward(false)
        }
        

        if (shoot){
            const bulletDirection = cameraDirection.clone().multiplyScalar(40);
            const bulletPosition = camera.position
                .clone()
                .add(cameraDirection.clone().multiplyScalar(2));
            setBullets((bullets) => [
                ...bullets,
                {
                    position: [bulletPosition.x, 2, bulletPosition.z],
                    forward: [bulletDirection.x, bulletDirection.y, bulletDirection.z]
                }]);
            setShoot(false)
        }
        
    })
    
    return (
        <>
            {bullets.map((bullet,index) => {
                return (
                <Bullet
                    key={index}
                    velocity={bullet.forward}
                    position={bullet.position}
                />
                );
            })}
            <mesh ref={sphereRef}>
                <sphereBufferGeometry attach="geometry" args={[1, 32, 32]} />
                <meshNormalMaterial attach="material"/>
            </mesh>
        </>
        
    )
}

export default Player
