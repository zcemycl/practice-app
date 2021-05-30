import React,{useEffect} from 'react'
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';

export const Background = () => {
    const {scene} = useThree();
    useEffect(()=>{
        scene.background = new THREE.Color('lightblue')
    },[scene])
    return null
}

