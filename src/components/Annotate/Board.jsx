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
    const [editMode,setEditMode] = useState("Move"); // move or resize
    const [corner,setCorner] = useState(null);
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

    const MinMaxXY = (x1,x2,y1,y2) => {
        const minX = Math.min(x1,x1+x2);
        const maxX = Math.max(x1,x1+x2);
        const minY = Math.min(y1,y1+y2);
        const maxY = Math.max(y1,y1+y2);
        return {minX,maxX,minY,maxY}
    }

    const isWithinElement = (x,y,element) => {
        const {x1,x2,y1,y2} = element;
        return x>=x1 && x<=x1+x2 && y>=y1 && y<=y1+y2;
    }

    const getElementAtPosition = (x,y,elements) => {
        return elements.find(element => isWithinElement(x,y,element));
    }

    const nearPoint = (x,y,refX,refY,w,h,name) => {
        return Math.abs(x-refX)<Math.ceil(w*0.2) && Math.abs(y-refY)<Math.ceil(h*0.2) ? name:null;
    }

    const setMoveOrResize = (x,y,element) => {
        const {x1,x2,y1,y2} = element;
        const topLeft = nearPoint(x,y,x1,y1,x2,y2,"tl");
        const topRight = nearPoint(x,y,x1+x2,y1,x2,y2,"tr");
        const bottomLeft = nearPoint(x,y,x1,y1+y2,x2,y2,"bl");
        const bottomRight = nearPoint(x,y,x1+x2,y1+y2,x2,y2,"br");
        return topLeft||topRight||bottomLeft||bottomRight;
    }

    const handleMouseDown = (event) => {
        const {cr,ratioW,ratioH} = getParams();
        const {clientX,clientY} = event;
        if (mode === "Edit"){
            const x = Math.floor((clientX-cr.x)*ratioW);
            const y = Math.floor((clientY-cr.y)*ratioH);
            const selectElement = getElementAtPosition(x,y,elements);

            if (selectElement) {
                const anyCorner = setMoveOrResize(x,y,selectElement);
                if (anyCorner !== null){
                    setEditMode("Resize");
                } else {
                    setEditMode("Move");
                }
                setCorner(anyCorner);
                console.log(anyCorner);
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

    const move = (clientX,clientY,selectedElement,cr,ratioW,ratioH) => {
        const {id,x2,y2,offsetX,offsetY} = selectedElement;
        var x = Math.floor((clientX-offsetX-cr.x)*ratioW);
        var y = Math.floor((clientY-offsetY-cr.y)*ratioH);
        const {minX,maxX,minY,maxY} = MinMaxXY(x,x2,y,y2);
        var varoffX = offsetX;
        var varoffY = offsetY;
        if (minX<0) {varoffX = clientX-cr.x;}
        if (minY<0) {varoffY = clientY-cr.y;}
        if (maxX>imgW) {varoffX = clientX-cr.x-(imgW-x2)/ratioW}
        if (maxY>imgH) {varoffY = clientY-cr.y-(imgH-y2)/ratioH}
        const {updateElement,index} = endElement(elements,clientX-varoffX,clientY-varoffY,cr,ratioW,ratioH,id);
        updateElements(updateElement,index);
    }

    const resize = (clientX,clientY,selectedElement,cr,ratioW,ratioH) => {
        const {id,x1,y1,x2,y2,color} = selectedElement;
        const x = Math.floor((clientX-cr.x)*ratioW);
        const y = Math.floor((clientY-cr.y)*ratioH);
        var updateElement = null;
        switch (corner) {
            case "tl":
                updateElement = createElement(id,
                    x,y,x1+x2-x,y1+y2-y,label,color);
                updateElements(updateElement,id);
                break;
            case "tr":
                updateElement = createElement(id,
                    x1,y,x-x1,y1+y2-y,label,color);
                updateElements(updateElement,id);
                break;
            case "bl":
                updateElement = createElement(id,
                    x,y1,x1+x2-x,y-y1,label,color);
                updateElements(updateElement,id);
                break;
            case "br":
                updateElement = createElement(id,
                    x1,y1,x-x1,y-y1,label,color);
                updateElements(updateElement,id);
                break;
            default:return
        }
        
    }

    const cursorType = () => {
        switch (mode) {
            default:
            case "Box":
                return "default";
            case "Edit":
                switch (editMode){
                    default:
                    case "Move":
                        return "move";
                    case "Resize":
                        switch (corner) {
                            default:
                            case "tl":
                            case "br":
                                return "nwse-resize";
                            case "tr":
                            case "bl":
                                return "nesw-resize";
                        }
                }

        }
    }

    const handleMouseMove = (event) => {
        const {cr,ratioW,ratioH} = getParams();
        const {clientX,clientY} = event;
        event.target.style.cursor = cursorType();
        if (mode === "Edit"){
            if (selectedElement !== null){
                if (editMode === "Move"){
                    move(clientX,clientY,selectedElement,cr,ratioW,ratioH);
                } else if (editMode === "Resize"){
                    resize(clientX,clientY,selectedElement,cr,ratioW,ratioH);
                }
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
            const {x1,y1,x2,y2} = elements[index];
            const {minX,maxX,minY,maxY} = MinMaxXY(x1,x2,y1,y2);
            const updateElement = {...elements[index],x1:minX,x2:maxX-minX,y1:minY,y2:maxY-minY};
            updateElements(updateElement,index);
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
            const x = Math.floor((clientX-cr.x)*ratioW);
            const y = Math.floor((clientY-cr.y)*ratioH);
            const selectElement = getElementAtPosition(x,y,elements);

            if (selectElement) {
                const anyCorner = setMoveOrResize(x,y,selectElement);
                if (anyCorner !== null){
                    setEditMode("Resize");
                } else {
                    setEditMode("Move");
                }
                setCorner(anyCorner);
                console.log(anyCorner);
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
        event.target.style.cursor = cursorType();
        if (mode === "Edit"){
            if (selectedElement !== null){
                if (editMode === "Move"){
                    move(clientX,clientY,selectedElement,cr,ratioW,ratioH);
                } else if (editMode === "Resize"){
                    resize(clientX,clientY,selectedElement,cr,ratioW,ratioH);
                }
            }
        } else {
            if (!drawing) return;
            var {updateElement,index} = endElement(elements,clientX,clientY,cr,ratioW,ratioH);
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
