import React from 'react'
import { useCylinder } from '@react-three/cannon'

const Cylinder = ({position,color}) => {
    const [ref] = useCylinder(()=>({
        mass:1,position,color,
    }))

    return (
    <mesh ref={ref} >
        <cylinderBufferGeometry attach="geometry"/>
        <meshStandardMaterial attach="material" color={color}/>
    </mesh>
    )
}


export default Cylinder
