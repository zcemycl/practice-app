import React,{useState,useEffect,useRef} from 'react'
import useStyles from './styles';
import { Grid, Card } from '@material-ui/core';
import * as t from "three";
import {init} from './init';

const Game = ({setSelected}) => {
    const classes = useStyles();
    const targetRef = useRef(null);
    const [isAnimating, setAnimating] = useState(true)
    const controls = useRef(null)
    
    useEffect(()=>{
        setSelected("3D Game");
    },[setSelected])

    useEffect(()=>{
        var frameId = null;
        var {width,height,scene,camera,renderer} = init(targetRef)

        //Create a DirectionalLight and turn on shadows for the light
        const light = new t.PointLight( 0xffffff, 100, 1000 );
        light.position.set( 5, 5, 5 ); //default; light shining from top
        // light.castShadow = true; // default false
        
        const geometry = new t.BoxGeometry(1,1,1);
        const material = new t.MeshStandardMaterial({color:0xff00ff})
        const cube = new t.Mesh(geometry,material)
        cube.position.y = 1
        camera.position.z = 10
        cube.castShadow = true
        scene.add(cube)
        scene.add( light );

        const planeGeometry = new t.PlaneGeometry( 20, 20, 32, 32 );
        const planeMaterial = new t.MeshStandardMaterial({color:0x00ff00})
        const plane = new t.Mesh( planeGeometry, planeMaterial );
        plane.position.y = -10
        // plane.castShadow = true
        plane.receiveShadow = true;
        scene.add( plane );


        renderer.setClearColor('#000000')
        renderer.setSize(width, height)



        const renderScene = () => {
            renderer.render(scene, camera)
          }
      
        const handleResize = () => {
            width = targetRef.current.clientWidth
            height = targetRef.current.clientHeight
            renderer.setSize(width, height)
            camera.aspect = width / height
            camera.updateProjectionMatrix()
            renderScene()
        }
        
        const animate = () => {
            cube.rotation.x += 0.01
            cube.rotation.y += 0.01
        
            renderScene()
            frameId = window.requestAnimationFrame(animate)
        }
    
        const start = () => {
        if (!frameId) {
            frameId = requestAnimationFrame(animate)
        }
        }
    
        const stop = () => {
        cancelAnimationFrame(frameId)
        frameId = null
        }

        targetRef.current.appendChild( renderer.domElement );

        window.addEventListener('resize', handleResize)
        start()
        controls.current = { start, stop }

        return () => {
            stop()
            window.removeEventListener('resize', handleResize)
            targetRef.current.removeChild(renderer.domElement)
            
            scene.remove(cube)
            geometry.dispose()
            material.dispose()
        }

    },[targetRef])

    useEffect(() => {
        if (isAnimating) {
          controls.current.start()
        } else {
          controls.current.stop()
        }
      }, [isAnimating])

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
                    <div className="container" style={{
                        top:0, left:0, width:'100%',
                        right:0, bottom:0, height: '100%'
                    }} ref={targetRef}
                    onClick={()=>setAnimating(!isAnimating)} />
                </Card>
            </Grid>
        </Grid>
            
        </div>
    )
}

export default Game
