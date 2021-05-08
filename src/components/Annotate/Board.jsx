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

const Board = ({theImg,setDims,targetRef}) => {
    const classes = useStyles();
    const [elements,setElements] = useState([]);
    const [drawing,setDrawing] = useState(false);
    const imgW = theImg.width;
    const imgH = theImg.height;

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
        context.drawImage(theImg,0,0,imgW,imgH);
        const roughCanvas = rough.canvas(canvas);
        elements.forEach(({roughElement}) => {
            roughCanvas.draw(roughElement);
        });
    },[elements,theImg,imgW,imgH]);

    const getParams = () =>{
        updateOffset();
        const cr = targetRef.current.getBoundingClientRect();
        const ratioW = imgW/cr.width;
        const ratioH = imgH/cr.height;
        return {cr,ratioW,ratioH}
    }

    const handleMouseDown = (event) => {
        setDrawing(true);
        const {cr,ratioW,ratioH} = getParams();
        const {clientX,clientY} = event;
        const element = createElement(
            (clientX-cr.x)*ratioW,(clientY-cr.y)*ratioH,0,0);
        setElements((prevState)=>[...prevState,element]);
    }

    const handleMouseMove = (event) => {
        if (!drawing) return;
        const {cr,ratioW,ratioH} = getParams();
        const {clientX,clientY} = event;
        const index = elements.length - 1;
        const {x1,y1} = elements[index];
        const updateElement = createElement(
            x1,y1,(clientX-cr.x)*ratioW-x1,(clientY-cr.y)*ratioH-y1);
        const elementsCopy = [...elements];
        elementsCopy[index] = updateElement;
        setElements(elementsCopy);
    }

    const handleMouseUp = (event) => {
        setDrawing(false);
    }

    const handleTouchStart = (event) => {
        setDrawing(true);
        const {cr,ratioW,ratioH} = getParams();
        const {clientX,clientY} = event.targetTouches[0];
        const element = createElement(
            (clientX-cr.x)*ratioW,(clientY-cr.y)*ratioH,0,0);
        setElements((prevState)=>[...prevState,element]);
    }

    const handleTouchMove = (event) => {
        if (!drawing) return;
        const {cr,ratioW,ratioH} = getParams();
        const {clientX,clientY} = event.targetTouches[0];
        const index = elements.length - 1;
        const {x1,y1} = elements[index];
        const updateElement = createElement(
            x1,y1,(clientX-cr.x)*ratioW-x1,(clientY-cr.y)*ratioH-y1);
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
