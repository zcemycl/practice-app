import React, {useEffect,useRef,Suspense} from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import useStyles from './styles';
import { Grid, Card } from '@material-ui/core';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import woman from './woman.glb';
import { Environment,OrbitControls } from '@react-three/drei'

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

const Woman = () =>{
    const gltf = useLoader(GLTFLoader,woman);
    return (
        <primitive object={gltf.scene} 
            position={[0,-10,0]}/>      
    );
}

const ThreeFiber = ({setSelected}) => {
    const classes = useStyles();
    useEffect(()=>{
        setSelected("3D Scene");
    },[setSelected])
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
                    <Canvas camera={{position:[5,0,20]}}>
                    <ambientLight intensity={0.5}/>
                    <spotLight intensity={0.8} position={[300, 300, 400]} />
                    

                    <Suspense fallback={null}>
                        <Box position={[0,0,0]}/>
                        <Woman/>
                        <OrbitControls/>
                        <Environment preset="sunset" background />
                    </Suspense>
                    </Canvas>
                
                </Card>
            </Grid>
        </Grid>
            
        </div>

    )
}

export default ThreeFiber
