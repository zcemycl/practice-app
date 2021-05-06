import React, { useRef,useState,useEffect,useLayoutEffect } from 'react';
import useStyles from './styles';
import { Grid, Card, CardMedia } from '@material-ui/core';
import placeholder from './image.png';
import rough from 'roughjs/bundled/rough.esm';
import { RoughCanvas } from 'roughjs/bin/canvas';

// https://stackoverflow.com/questions/15639726/how-to-set-canvas-on-top-of-image-in-html
// https://www.youtube.com/watch?v=6arkndScw7A
// https://github.com/ooade/react-rough
// https://stackoverflow.com/questions/49058890/how-to-get-a-react-components-size-height-width-before-render
const generator = rough.generator();


const Annotate = () => {
    const classes = useStyles();
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    const [{alt, src}, setImg] = useState({
        src: placeholder,
        alt: 'Upload an Image'
    });
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
    });


    // useEffect(() => {
    //     window.addEventListener("mousemove", 
    //         ev=>{
    //             setMousePosition({ x: ev.clientX, y: ev.clientY });
    //         });
    //     return () => window.removeEventListener("mousemove",
    //         ev=>{
    //             setMousePosition({ x: ev.clientX, y: ev.clientY });
    //         });
    // },[setMousePosition]);

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

                <div style={{display:"inline-block",
                    position:"relative",
                    width:"100%"}}>
                <CardMedia component="img" 
                    className={classes.media} 
                    image={placeholder} />
                <canvas id="canvas" style={{
                    backgroundColor:"grey",
                    zIndex:"20",width:"100%"}}/>
                </div>

                <h1>
                    {`Image H,W = ${imgH},${imgW}`}
                    <br></br>
                    {`Your cursor is at ${mousePosition.x}, ${mousePosition.y}.`}
                </h1>
                
                </Card>
            </Grid>
        </Grid>
            
        </div>

    )
}

export default Annotate

