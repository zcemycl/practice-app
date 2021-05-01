import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import useStyles from './styles';
import { Grid, Card } from '@material-ui/core';

const Box = (props) =>{
    const mesh = useRef();
    useFrame((state, delta) => {
        mesh.current.rotation.x += 0.01;
        mesh.current.rotation.y += 0.02;
    })
    return (
        <mesh
            {...props}
            ref={mesh}
            scale={1}
        >
            <boxGeometry args={[5,5,5]}/>
            <meshStandardMaterial color={'orange'}/>
        </mesh>
    )
}

const ThreeFiber = () => {
    const classes = useStyles();
    return (
        <div className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container 
            justify="center" 
            direction="row"
            spacing={0}
            className={classes.grid}>
            <Grid xs={12} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                    <Canvas camera={{ fov:100, position:[0,0,10] }}>
                    <ambientLight/>
                    <pointLight position={[10,10,10]}/>
                    <Box position={[0,0,0]}/>
                    </Canvas>
                
                </Card>
            </Grid>
        </Grid>
            
        </div>

    )
}

export default ThreeFiber
