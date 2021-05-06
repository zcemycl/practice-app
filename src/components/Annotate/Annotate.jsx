import React, { useRef,useState,useEffect,useLayoutEffect } from 'react';
import useStyles from './styles';
import { Grid, Card, CardMedia } from '@material-ui/core';
import placeholder from './image.png';
import rough from 'roughjs/bundled/rough.esm';
import { RoughCanvas } from 'roughjs/bin/canvas';

// https://www.youtube.com/watch?v=6arkndScw7A
// https://github.com/ooade/react-rough
const generator = rough.generator();

const Annotate = () => {
    const classes = useStyles();
    const targetRef = useRef();
    const [dims, setDims] = useState({ width:0, height:100});
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    const updateCursorPos = ev=>{
        setMousePosition({ x: ev.clientX, y: ev.clientY });
    }
    const updateOffset = () =>{
        if (targetRef.current){
            setDims({width:targetRef.current.offsetWidth,
                height:targetRef.current.offsetHeight});
        }
    }

    const theImg = new Image();
    theImg.src = placeholder;
    const imgW = theImg.width;
    const imgH = theImg.height;

    useLayoutEffect(() =>{
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        const roughCanvas = rough.canvas(canvas);
        const rect = generator.rectangle(10,10,100,100);
        roughCanvas.draw(rect);
    },[]);

    useEffect(() => {
        updateOffset();
        window.addEventListener('resize',updateOffset);
        return () => window.removeEventListener('resize',updateOffset);
    },[updateOffset]);

    useEffect(() => {
        window.addEventListener("mousemove",updateCursorPos);
        return () => window.removeEventListener("mousemove",updateCursorPos);
    },[]);

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

                <div className={classes.annotateRegion}>
                <CardMedia component="img" 
                    className={classes.media} 
                    image={placeholder}
                    ref={targetRef} />
                <canvas id="canvas" 
                    className={classes.canvas}
                    style={{height:`${dims.height}px`}}/>
                </div>

                <h3>
                    {`Image H,W = ${imgH},${imgW}`}
                    <br/>
                    {`Image Offset H,W = ${dims.height},${dims.width}`}
                    <br></br>
                    {`Your cursor is at ${mousePosition.x}, ${mousePosition.y}.`}
                </h3>
                
                </Card>
            </Grid>
        </Grid>
            
        </div>

    )
}

export default Annotate

