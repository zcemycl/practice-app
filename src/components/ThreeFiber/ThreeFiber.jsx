import React, {useState,
    useEffect,Suspense} from 'react';
import * as THREE from 'three';
import { Physics } from '@react-three/cannon'
import { Canvas } from '@react-three/fiber';
import { Plane,Box,Round,
    Cylinder,DataGui } from './components'
import useStyles from './styles';
import { Grid, Card } from '@material-ui/core';
import 'react-dat-gui/dist/index.css';
import {assign} from '../../actions';
import {useDispatch} from 'react-redux';

const ThreeFiber = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(assign("3D Scene"));
    },[dispatch])
    const defaultSettings = {
        camx:-9,camy:10,camz:2,fov:90,
        camlx:7,camly:1,camlz:2,
        boxx:0,boxy:10,boxz:0,color:"blue"}
    const [data,setData] = useState(defaultSettings)
    const [cam,setCam] = useState(null)


    return (
        <div className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container 
            justify="center" 
            direction="row"
            spacing={0}
            className={classes.grid}>
            <Grid xs={12} sm={10} md={10} lg={10} item={true}>
                <Card className={classes.card}>                    
                <Canvas 
                shadows
                gl={{ alpha: false }}
                camera={{position:[data.camx,
                    data.camy,data.camz],fov:data.fov}}
                onCreated={(state) => {
                    const {camera,gl,scene} = state;
                    setCam(camera)
                    camera.lookAt(data.camlx,data.camly,data.camlz)
                    scene.background = new THREE.Color('lightblue')
                    gl.toneMapping = THREE.ACESFilmicToneMapping
                    gl.outputEncoding = THREE.sRGBEncoding
                    }}
                >
                {/* <pointerLockControls ref={controls} 
                    args={[camera, gl.domElement]} /> */}
                {/* <hemisphereLight intensity={0.35} />
                <ambientLight intensity={0.1} /> */}
                <ambientLight />
                <spotLight angle={0.25} penumbra={0.5} position={[10, 10, 5]} castShadow />
                <directionalLight position={[5, 5, 5]} 
                    intensity={2} castShadow
                    shadow-mapSize-height={512}
                    shadow-mapSize-width={512}
                    shadow-camera-zoom={2} />

                <Physics>
                <Suspense fallback={null}>
                    {/* <Player/> */}
                    <Round position={[-1,3,1]} 
                        color="purple"/>
                    <Box position={[data.boxx,data.boxy,data.boxz]}
                        enable color={data.color}/>
                    <Box position={[2,11,2]}
                        color="orange"/>
                    <Box position={[0.5,13,-0.5]}
                        color="orange"/>
                    <Cylinder position={[2,4,2]}
                        color="red"/>
                    
                    <Plane rotation={[-Math.PI/2,0,0]}
                        color='#32cd32'/>
                </Suspense>
                </Physics>
                </Canvas>

                <DataGui {...{cam,data,setData,defaultSettings}}/>
                </Card>
                
            </Grid>
        </Grid>
            
        </div>

    )
}

export default ThreeFiber
