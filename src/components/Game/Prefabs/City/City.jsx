import React from 'react'
import { usePlane } from '@react-three/cannon'
import { useFBX } from '@react-three/drei'

function City(props){
    const fbx = useFBX('./data/EnviromentF.fbx')
    const [ref] = usePlane(()=>({
        rotation:[-Math.PI/2,0,0],
        position:[-10,0,0],
        color:"red",
        ...props
    }))

    return (
    <mesh castShadow receiveShadow ref={ref} 
        scale={[0.01,0.01,0.01]}
        >
        <primitive object={fbx} dispose={null} 
            rotation={[Math.PI/2,0,0]}/>
    </mesh>
    )
}

export default City


