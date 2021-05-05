import React, { useState,useEffect } from 'react';
import useStyles from './styles';
import { Grid, Card, CardMedia } from '@material-ui/core';
import placeholder from './image.png';

const Annotate = () => {
    const classes = useStyles();
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    const [{alt, src}, setImg] = useState({
        src: placeholder,
        alt: 'Upload an Image'
    });

    useEffect(() => {
        window.addEventListener("mousemove", 
            ev=>{
                setMousePosition({ x: ev.clientX, y: ev.clientY });
            });
        return () => window.removeEventListener("mousemove",
            ev=>{
                setMousePosition({ x: ev.clientX, y: ev.clientY });
            });
    },[setMousePosition]);

    const theImg = new Image();
    theImg.src = placeholder;
    const imgW = theImg.width;
    const imgH = theImg.height;


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
                <CardMedia component="img" className={classes.media} 
                    image={placeholder} />
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

