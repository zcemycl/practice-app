import React, { useRef,useState,useEffect,useLayoutEffect } from 'react';
import useStyles from './styles';
import { Grid, Card, CardMedia } from '@material-ui/core';
import placeholder from './image.png';
import rough from 'roughjs/bundled/rough.esm';

// https://www.youtube.com/watch?v=6arkndScw7A
// https://github.com/ooade/react-rough
const generator = rough.generator();

const createElement = (x1,y1,x2,y2) => {
    const roughElement = generator.rectangle(x1,y1,x2,y2);
    return {x1,y1,x2,y2,roughElement};
}

const Annotate = () => {
    const classes = useStyles();
    const theImg = new Image();
    theImg.src = placeholder;
    const imgW = theImg.width;
    const imgH = theImg.height;
    const targetRef = useRef();
    const [dims, setDims] = useState({width:300,height:300,
        });
    const [mousePosition, setMousePosition] = useState({x:null,y:null});
    const [elements,setElements] = useState([]);
    const [drawing,setDrawing] = useState(false);
    const updateCursorPos = ev=>{
        setMousePosition({ x: ev.clientX, y: ev.clientY });
    }
    const updateOffset = () =>{
        if (targetRef.current){
            setDims({width:targetRef.current.offsetWidth,
                height:targetRef.current.offsetHeight});
        }
    }

    useLayoutEffect(() =>{
        const canvas = document.getElementById("canvas");
        const context = canvas.getContext("2d");
        console.log(canvas.width);
        context.clearRect(0,0,canvas.width,canvas.height);
        context.drawImage(theImg,0,0,imgW,imgH);
        const roughCanvas = rough.canvas(canvas);
        elements.forEach(({roughElement}) => {
            roughCanvas.draw(roughElement);
            console.log(roughElement);
        });
    },[elements]);

    const handleMouseDown = (event) => {
        setDrawing(true);
        const {clientX,clientY} = event;
        const element = createElement(clientX-100
            ,clientY-100,clientX-100,clientY-100);
        setElements((prevState)=>[...prevState,element]);
    }

    const handleMouseMove = (event) => {
        if (!drawing) return;
        const {clientX,clientY} = event;
        const index = elements.length - 1;
        const {x1,y1} = elements[index];
        const updateElement = createElement(x1-100,
            y1-100,clientX-100,clientY-100);
        const elementsCopy = [...elements];
        elementsCopy[index] = updateElement;
        setElements(elementsCopy);
        // console.log(clientX,clientY);
        // console.log(elements);
    }

    const handleMouseUp = (event) => {
        setDrawing(false);
    }

    

    useEffect(() => {
        window.addEventListener('resize',updateOffset);
        return () => window.removeEventListener('resize',updateOffset);
    },[updateOffset]);

    useEffect(() => {
        window.addEventListener("mousemove",updateCursorPos);
        return () => window.removeEventListener("mousemove",updateCursorPos);
    },[mousePosition,setMousePosition]);

    

    return (
        <div className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container 
            justify="center" 
            direction="row"
            spacing={0}
            className={classes.grid}>
            <Grid xs={12} sm={10} md={8} lg={6}>
                <Card className={classes.card}>

                {/* <div className={classes.annotateRegion}> */}
                {/* <CardMedia component="img" 
                    className={classes.media} 
                    image={placeholder}
                    onDragStart={(e)=>{e.preventDefault();}}
                    ref={targetRef} /> */}
                <canvas id="canvas" 
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    className={classes.canvas}
                    width={imgW} height={imgH}
                    />
                {/* </div> */}

                <h3>
                    {`Image H,W = ${imgH},${imgW}`}
                    <br/>
                    {`H,W = ${window.innerHeight},${window.innerWidth}`}
                    <br/>
                    {`Image Offset H,W = ${dims.height},${dims.width}`}
                    <br/>
                    {`Your cursor is at ${mousePosition.x}, ${mousePosition.y}.`}
                </h3>
                
                </Card>
            </Grid>
        </Grid>
            
        </div>

    )
}

export default Annotate

