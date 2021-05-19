import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import useStyles from './styles';
import { Grid, Card } from '@material-ui/core';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import city from './city.glb';
import { Environment,OrbitControls } from '@react-three/drei'

const Victoria = () =>{
    const gltf = useLoader(GLTFLoader,city);
    return (
        <primitive object={gltf.scene} 
            position={[0,0,0]}/>      
    );
}

const Map = () => {
    const classes = useStyles();
    return (
        <div className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container 
            justify="center" 
            direction="row"
            spacing={0}
            className={classes.grid}>
            <Grid xs={12} sm={10} md={8} lg={6} item={true}>
                <Card className={classes.card}>
                    <Canvas 
                        camera={{position:[5,100,20],
                                far:100000}}>
                    <ambientLight intensity={0.5}/>
                    <spotLight intensity={0.8} position={[300, 300, 400]} />

                    <Suspense fallback={null}>
                        <Victoria/>
                        <OrbitControls/>
                        {/* <PointerLockControls/> */}
                        <Environment preset="night" background />
                    </Suspense>
                    </Canvas>
                
                </Card>
            </Grid>
        </Grid>
            
        </div>

    )
}

export default Map