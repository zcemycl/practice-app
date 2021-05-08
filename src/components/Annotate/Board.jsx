import React, { useState,useLayoutEffect } from 'react';
import useStyles from './styles';
import rough from 'roughjs/bundled/rough.esm';

const generator = rough.generator();

const createElement = (x1,y1,x2,y2) => {
    const roughElement = generator.rectangle(x1,y1,x2,y2,
        {fill: "rgb(10,150,10,0.4)",
         stroke: "rgb(10,150,10)",
         fillStyle: "solid", strokeWidth: 7});
    // console.log(Math.floor(Math.random()*256))
    return {x1,y1,x2,y2,roughElement};
}

const Board = ({img,setDims,targetRef}) => {
    const classes = useStyles();
    const [elements,setElements] = useState([]);
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
        if (currSrc!==img.src){
            img.onload = () => {
                context.drawImage(img,0,0,imgW,imgH);
                setCurrSrc(img.src);
                setElements([]);
            };
        }
        context.drawImage(img,0,0,imgW,imgH);
        const roughCanvas = rough.canvas(canvas);
        elements.forEach(({roughElement}) => {
            roughCanvas.draw(roughElement);
        });
    },[elements,img,imgW,imgH]);

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
        const element = createElement(
            Math.floor((clientX-cr.x)*ratioW),
            Math.floor((clientY-cr.y)*ratioH),0,0);
        return {element}
    }

    const endElement = (elements,clientX,clientY,cr,ratioW,ratioH) => {
        const index = elements.length - 1;
        const {x1,y1} = elements[index];
        const updateElement = createElement(
            x1,y1,Math.floor((clientX-cr.x)*ratioW-x1),
            Math.floor((clientY-cr.y)*ratioH-y1));
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
        console.log(elements);
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
