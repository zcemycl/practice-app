import React, { useState,useLayoutEffect } from 'react';
import useStyles from './styles';
import rough from 'roughjs/bundled/rough.esm';

const generator = rough.generator();

const createElement = (id,x1,y1,x2,y2,clabel,color) => {
    const roughElement = generator.rectangle(x1,y1,x2,y2,
        {fill: `rgb(${color[0]},${color[1]},${color[2]},0.6)`,
         stroke: `rgb(${color[0]},${color[1]},${color[2]})`,
         fillStyle: "solid", strokeWidth: 7});
    return {id,x1,y1,x2,y2,roughElement,clabel,color};
}

const Board = ({img,setDims,targetRef,elements,setElements,label,mode}) => {
    const classes = useStyles();
    
    const [drawing,setDrawing] = useState(false);
    const [currSrc,setCurrSrc] = useState("");
    const [selectedElement,setSelectedElement] = useState(null);
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

    const startElement = (id,clientX,clientY,cr,ratioW,ratioH) => {
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        const color = [r,g,b];
        const element = createElement(id,
            Math.floor((clientX-cr.x)*ratioW),
            Math.floor((clientY-cr.y)*ratioH),0,0,label,color);
        return {element}
    }

    const endElement = (elements,clientX,clientY,cr,ratioW,ratioH,id=null) => {
        var index = null;
        if (id === null){
            index = elements.length - 1;
            id = index;
        } else {
            index = id;
        }
        
        const {x1,y1,x2,y2,color} = elements[index];
        var updateElement = {};
        if (mode==="Edit"){
            updateElement = createElement(id,
                Math.floor((clientX-cr.x)*ratioW),
                Math.floor((clientY-cr.y)*ratioH),
                x2,y2,label,color);
        } else {
            updateElement = createElement(id,
                x1,y1,Math.floor((clientX-cr.x)*ratioW-x1),
                Math.floor((clientY-cr.y)*ratioH-y1),label,color);
        }
        
        return {updateElement,index}
    }

    const isWithinElement = (x,y,element) => {
        const {x1,x2,y1,y2} = element;
        const minX = Math.min(x1,x1+x2);
        const maxX = Math.max(x1,x1+x2);
        const minY = Math.min(y1,y1+y2);
        const maxY = Math.max(y1,y1+y2);
        return x>=minX && x<=maxX && y>=minY && y<=maxY;
    }

    const getElementAtPosition = (x,y,elements) => {
        return elements.find(element => isWithinElement(x,y,element));
    }

    const handleMouseDown = (event) => {
        const {cr,ratioW,ratioH} = getParams();
        const {clientX,clientY} = event;
        if (mode === "Edit"){
            const selectElement = getElementAtPosition(
                Math.floor((clientX-cr.x)*ratioW),
                Math.floor((clientY-cr.y)*ratioH),
                elements);

            if (selectElement) {
                const offsetX = clientX-selectElement.x1/ratioW-cr.x;
                const offsetY = clientY-selectElement.y1/ratioH-cr.y;
                setSelectedElement({...selectElement,offsetX,offsetY});
            }
        } else {
            setDrawing(true);
            const id = elements.length;
            const {element} = startElement(id,clientX,clientY,cr,ratioW,ratioH);
            setElements((prevState)=>[...prevState,element]);
        }
    }

    const updateElements = (updateElement,index) => {
        const elementsCopy = [...elements];
        elementsCopy[index] = updateElement;
        setElements(elementsCopy);
    }

    const handleMouseMove = (event) => {
        const {cr,ratioW,ratioH} = getParams();
        const {clientX,clientY} = event;
        event.target.style.cursor = selectedElement ? "move" : "default";
        if (mode === "Edit"){
            if (selectedElement !== null){
                const {id,x2,y2,offsetX,offsetY} = selectedElement;
                var x = Math.floor((clientX-offsetX-cr.x)*ratioW);
                var y = Math.floor((clientY-offsetY-cr.y)*ratioH);
                var minX = Math.min(x,x+x2);
                var maxX = Math.max(x,x+x2);
                var minY = Math.min(y,y+y2);
                var maxY = Math.max(y,y+y2);
                var varoffX = offsetX;
                var varoffY = offsetY;
                if (minX<0) {varoffX = clientX-cr.x;}
                if (minY<0) {varoffY = clientY-cr.y;}
                if (maxX>imgW) {varoffX = clientX-cr.x-(imgW-x2)/ratioW}
                if (maxY>imgH) {varoffY = clientY-cr.y-(imgH-y2)/ratioH}
                const {updateElement,index} = endElement(elements,clientX-varoffX,clientY-varoffY,cr,ratioW,ratioH,id);
                updateElements(updateElement,index);
            }
        } else {
            if (!drawing) return;
            var {updateElement,index} = endElement(elements,clientX,clientY,cr,ratioW,ratioH);
            updateElements(updateElement,index);
        }        
    }

    const handleMouseUp = (event) => {
        if (mode === "Edit"){
            setSelectedElement(null);
        } else {
            setDrawing(false);
            const index = elements.length - 1;
            const {x2,y2} = elements[index];
            if (x2===0 || y2===0){
                elements.pop();
                setElements(elements);
            }
        }
        console.log(elements);
    }

    const handleTouchStart = (event) => {
        const {cr,ratioW,ratioH} = getParams();
        const {clientX,clientY} = event.targetTouches[0];
        if (mode === "Edit"){
            const selectElement = getElementAtPosition(
                Math.floor((clientX-cr.x)*ratioW),
                Math.floor((clientY-cr.y)*ratioH),
                elements);

            if (selectElement) {
                const offsetX = clientX-selectElement.x1/ratioW-cr.x;
                const offsetY = clientY-selectElement.y1/ratioH-cr.y;
                setSelectedElement({...selectElement,offsetX,offsetY});
            }
        } else {
            setDrawing(true);
            const id = elements.length;
            const {element} = startElement(id,clientX,clientY,cr,ratioW,ratioH);
            setElements((prevState)=>[...prevState,element]);
        }
    }

    const handleTouchMove = (event) => {
        const {cr,ratioW,ratioH} = getParams();
        const {clientX,clientY} = event.targetTouches[0];
        event.target.style.cursor = selectedElement ? "move" : "default";
        if (mode === "Edit"){
            if (selectedElement !== null){
                const {id,x2,y2,offsetX,offsetY} = selectedElement;
                var x = Math.floor((clientX-offsetX-cr.x)*ratioW);
                var y = Math.floor((clientY-offsetY-cr.y)*ratioH);
                var minX = Math.min(x,x+x2);
                var maxX = Math.max(x,x+x2);
                var minY = Math.min(y,y+y2);
                var maxY = Math.max(y,y+y2);
                var varoffX = offsetX;
                var varoffY = offsetY;
                if (minX<0) {varoffX = clientX-cr.x;}
                if (minY<0) {varoffY = clientY-cr.y;}
                if (maxX>imgW) {varoffX = clientX-cr.x-(imgW-x2)/ratioW}
                if (maxY>imgH) {varoffY = clientY-cr.y-(imgH-y2)/ratioH}
                const {updateElement,index} = endElement(elements,clientX-varoffX,clientY-varoffY,cr,ratioW,ratioH,id);
                updateElements(updateElement,index);
            }
        } else {
            if (!drawing) return;
            const {updateElement,index} = endElement(elements,clientX,clientY,cr,ratioW,ratioH);
            updateElements(updateElement,index);
        }       
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
