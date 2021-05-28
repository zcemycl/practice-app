import React from 'react'
import { useSphere } from '@react-three/cannon'

const Round = ({position,color}) => {
    const [ref] = useSphere(()=>({
        mass:1,position,color
    }))
    return (
    <mesh castShadow receiveShadow ref={ref} >
        <sphereBufferGeometry />
        <meshStandardMaterial color={color}/>
    </mesh>
    )
}


export default Round
