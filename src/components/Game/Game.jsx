import React, {useEffect} from 'react';
import { Canvas } from '@react-three/fiber';
import useStyles from './styles';
import { Grid, Card } from '@material-ui/core';
import { Scene } from './Scene'
import { UI,Aimer } from './components'
import {assign} from '../../actions';
import {useDispatch} from 'react-redux';

const Game = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(assign("Game"));
    },[dispatch])

    return (
        <div className={classes.content}>
        <div className={classes.toolbar}/>
            <Grid container 
                justify="center" 
                direction="row"
                spacing={0}
                className={classes.grid}>
                <Grid xs={12} sm={10} md={10} lg={10} item={true}
                    style={{position:'relative'}}>
                    <Card className={classes.card}>
                    <UI>
                        <Aimer/>
                    </UI>
                    <Canvas shadow sRGB 
                        gl={{alpha:false}}
                        camera={{fov:100}}>
                        <Scene/>
                    </Canvas>
                    <div style={{ position: 'absolute', top: 10, left: 20 }}>
                        <pre>
                        Click to Lock screen
                        <br/>
                        Esc to unlock 
                        <br/>
                        W to go forward<br/>
                        Mouse hover to turn angle
                        <br />Mouse Press to fire bullet
                        </pre>
                    </div>
                    </Card>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Game
