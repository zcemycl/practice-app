import React from 'react'
import { usePlane } from '@react-three/cannon'

const Plane = (props) => {
    const [ref] = usePlane(()=>({
        mass:0,
        ...props
    }))

    return (
    <mesh receiveShadow ref={ref} >
        <planeBufferGeometry 
            attach="geometry" args={[500,500]} />
        <meshStandardMaterial attach="material"
            color={props.color} transparent={true}
            opacity={props.opacity}/>
    </mesh>
    )
}


export default Plane
