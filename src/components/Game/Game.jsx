// import React,{useState,useEffect,useRef} from 'react'
import useStyles from './styles';
import { Grid, Card } from '@material-ui/core';

const Game = () => {
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
     
                </Card>
            </Grid>
        </Grid>
            
        </div>
    )
}

export default Game
