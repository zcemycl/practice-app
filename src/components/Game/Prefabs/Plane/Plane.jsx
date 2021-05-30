import React from 'react'
import { usePlane } from '@react-three/cannon'

function Plane(props){
    // const {scene} = useThree();
    const [ref] = usePlane(()=>({
        masss:0,
        rotation:[-Math.PI/2,0,0],
        ...props
    }))

    return (
    <mesh receiveShadow ref={ref} >
        <planeBufferGeometry 
            attach="geometry" args={[100,100]}/>
        <meshStandardMaterial attach="material"
            color={props.color}/>
    </mesh>
    )
}

export default Plane


