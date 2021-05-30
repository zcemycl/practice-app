import React, {useEffect} from 'react';
import { Canvas } from '@react-three/fiber';
import useStyles from './styles';
import { Grid, Card } from '@material-ui/core';
import { Scene } from './Scene'

const Game = ({setSelected}) => {
    const classes = useStyles();
    useEffect(()=>{
        setSelected("Game");
    },[setSelected])

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
                    <Canvas shadow>
                    <Scene/>
                    </Canvas>
                    </Card>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Game
