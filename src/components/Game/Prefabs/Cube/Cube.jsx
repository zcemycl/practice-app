import React from 'react'
import { useFrame } from '@react-three/fiber' 
import { useBox } from '@react-three/cannon'

const Cube = ({count}) => {
    const [ref, api] = useBox(() => ({
        mass: 1,
        position: [Math.random()*300+150,
            Math.random()*5+50,
            Math.random()*280+200]
      }))

    useFrame(() => {
        const id = Math.floor(Math.random() * count)
        api.at(id).velocity.set(0,-1,0)
        api.at(id).position.set(Math.random()*300+150,
            Math.random()*5+50, Math.random()*280+200)
        
    })
        
    return (
        <instancedMesh receiveShadow castShadow ref={ref}
            args={[null,null,count]}>
            <boxBufferGeometry attach="geometry"/>
            <meshNormalMaterial attach="material"/>
        </instancedMesh>
    )
}

export default Cube
