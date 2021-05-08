import React, { useState,useLayoutEffect } from 'react';
import useStyles from './styles';
import rough from 'roughjs/bundled/rough.esm';

const generator = rough.generator();

const createElement = (x1,y1,x2,y2,clabel,color) => {
    const roughElement = generator.rectangle(x1,y1,x2,y2,
        {fill: `rgb(${color[0]},${color[1]},${color[2]},0.6)`,
         stroke: `rgb(${color[0]},${color[1]},${color[2]})`,
         fillStyle: "solid", strokeWidth: 7});
    return {x1,y1,x2,y2,roughElement,clabel,color};
}

const Board = ({img,setDims,targetRef,elements,setElements,label}) => {
    const classes = useStyles();
    
    const [drawing,setDrawing] = useState(false);
    const [currSrc,setCurrSrc] = useState("");
    const imgW = img.width;
    const imgH = img.height;
    
    const updateOffset = () =>{
        if (targetRef.current){
            setDims({width:targetRef.current.offsetWidth,
                height:targetRef.current.offsetHeight});
        }
    }

    useLayoutEffect(() =>{
        const canvas = document.getElementById("canvas");
        const context = canvas.getContext("2d");
        context.clearRect(0,0,canvas.width,canvas.height);
        context.font = "800 35px Arial";
        context.fillStyle = "blue";
        if (currSrc!==img.src){
            img.onload = () => {
                context.drawImage(img,0,0,imgW,imgH);
                setCurrSrc(img.src);
                setElements([]);
            };
        }
        context.drawImage(img,0,0,imgW,imgH);
        const roughCanvas = rough.canvas(canvas);
        elements.forEach(({x1,y1,y2,roughElement,clabel,color}) => {
            const [r,g,b] = color;
            context.fillStyle = `rgb(${256-r},${256-g},${256-b})`;
            roughCanvas.draw(roughElement);
            context.fillText(clabel,x1,y1+y2*0.2); 
        });
    },[img,imgW,imgH,currSrc,setCurrSrc,elements,setElements]);

    const getParams = () =>{
        updateOffset();
        const cr = targetRef.current.getBoundingClientRect();
        const imgW = img.width;
        const imgH = img.height;
        const ratioW = imgW/cr.width;
        const ratioH = imgH/cr.height;
        return {cr,ratioW,ratioH,imgW,imgH}
    }

    const startElement = (clientX,clientY,cr,ratioW,ratioH) => {
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        const color = [r,g,b];
        const element = createElement(
            Math.floor((clientX-cr.x)*ratioW),
            Math.floor((clientY-cr.y)*ratioH),0,0,label,color);
        return {element}
    }

    const endElement = (elements,clientX,clientY,cr,ratioW,ratioH) => {
        const index = elements.length - 1;
        const {x1,y1,color} = elements[index];
        const updateElement = createElement(
            x1,y1,Math.floor((clientX-cr.x)*ratioW-x1),
            Math.floor((clientY-cr.y)*ratioH-y1),label,color);
        return {updateElement,index}
    }

    const handleMouseDown = (event) => {
        setDrawing(true);
        const {cr,ratioW,ratioH} = getParams();
        const {clientX,clientY} = event;
        const {element} = startElement(clientX,clientY,cr,ratioW,ratioH);
        setElements((prevState)=>[...prevState,element]);
    }

    const handleMouseMove = (event) => {
        if (!drawing) return;
        const {cr,ratioW,ratioH} = getParams();
        const {clientX,clientY} = event;
        const {updateElement,index} = endElement(elements,clientX,clientY,cr,ratioW,ratioH);
        const elementsCopy = [...elements];
        elementsCopy[index] = updateElement;
        setElements(elementsCopy);
    }

    const handleMouseUp = (event) => {
        setDrawing(false);
        const index = elements.length - 1;
        const {x2,y2} = elements[index];
        if (x2===0 || y2===0){
            elements.pop();
            setElements(elements);
        }
    }

    const handleTouchStart = (event) => {
        setDrawing(true);
        const {cr,ratioW,ratioH} = getParams();
        const {clientX,clientY} = event.targetTouches[0];
        const {element} = startElement(clientX,clientY,cr,ratioW,ratioH);
        setElements((prevState)=>[...prevState,element]);
    }

    const handleTouchMove = (event) => {
        if (!drawing) return;
        const {cr,ratioW,ratioH} = getParams();
        const {clientX,clientY} = event.targetTouches[0];
        const {updateElement,index} = endElement(elements,clientX,clientY,cr,ratioW,ratioH);
        const elementsCopy = [...elements];
        elementsCopy[index] = updateElement;
        setElements(elementsCopy);
    }

    return (
        <>
            <canvas id="canvas" 
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleMouseUp}
                className={classes.canvas}
                width={imgW} height={imgH}
                ref={targetRef}
            />
        </>
    )
}

export default Board;
