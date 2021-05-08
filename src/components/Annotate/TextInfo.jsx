import React, { useState,useEffect } from 'react';

const TextInfo = ({theImg,dims,setDims,targetRef}) => {
    const imgW = theImg.width;
    const imgH = theImg.height;

    const [mousePosition, setMousePosition] = useState({x:null,y:null});

    const updateOffset = () =>{
        if (targetRef.current){
            setDims({width:targetRef.current.offsetWidth,
                height:targetRef.current.offsetHeight});
        }
    }

    const updateCursorPos = ev=>{
        setMousePosition({ x: ev.clientX, y: ev.clientY });
    }
    const updateTouchPos = ev=>{
        const touch = ev.targetTouches[0];
        setMousePosition({ x: Math.floor(touch.clientX), 
                           y: Math.floor(touch.clientY)});
    }

    useEffect(() => {
        window.addEventListener('resize',updateOffset);
        return () => window.removeEventListener('resize',updateOffset);
    },[updateOffset]);

    useEffect(() => {
        window.addEventListener("mousemove",updateCursorPos);
        return () => window.removeEventListener("mousemove",updateCursorPos);
    },[mousePosition,setMousePosition]);

    useEffect(() => {
        window.addEventListener("touchmove",updateTouchPos);
        return () => window.removeEventListener("touchmove",updateTouchPos);
    },[mousePosition,setMousePosition]);

    return (
        <>
        <h5>
            {`Image H,W = ${imgH},${imgW}`}
            <br/>
            {`H,W = ${window.innerHeight},${window.innerWidth}`}
            <br/>
            {`Image Offset H,W = ${dims.height},${dims.width}`}
            <br/>
            {`Your cursor is at X,Y = ${mousePosition.x}, ${mousePosition.y}.`}
        </h5>
        </>
    )
}

export default TextInfo;
