import React,{useState,useRef,useEffect} from 'react'
import { useBox } from '@react-three/cannon'

const Box = ({position,color,enable}) =>{
    const [ref,api] = useBox(()=>({
        mass: 1, position, color}))
    const pos = useRef(position)
    const [history,setHistory] = useState(position)

    useEffect(() => api.position.subscribe((p)=>(pos.current=p)),[])

    const handleUpdate = () => {
        let target;
        for (const [key,val] of Object.entries(history)){
            if (val!==position[key]){
                target = key}}
        if (pos){
            if (target==="0"){api.position.set(position[0],pos.current[1],pos.current[2])}
            if (target==="1"){api.position.set(pos.current[0],position[1],pos.current[2])}
            if (target==="2"){api.position.set(pos.current[0],pos.current[1],position[2])}
            setHistory(position)}
    }

    return (
    <mesh castShadow receiveShadow ref={ref}
        onUpdate={enable && handleUpdate}>
        <boxBufferGeometry attach="geometry"/>
        <meshStandardMaterial attach="material" 
            color={color?color:'orange'}/>
    </mesh>
    )
}

export default Box
