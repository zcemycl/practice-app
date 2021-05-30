import React from 'react'
import { usePlane } from '@react-three/cannon'

function Plane(props){
    // const {scene} = useThree();
    const [ref] = usePlane(()=>({
        masss:0,
        rotation:[-Math.PI/2,0,0],
        position:[0,-.25,0],
        ...props
    }))

    return (
    <mesh receiveShadow ref={ref} scale={[1000,1000,1000]}>
        <planeBufferGeometry 
            attach="geometry" />
        <meshStandardMaterial attach="material"
            color={props.color}/>
    </mesh>
    )
}

export default Plane


