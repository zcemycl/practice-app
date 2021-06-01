import React, {useState,useEffect} from 'react';
import useStyles from './styles';
import {Grid,Card,CardMedia,
    CardContent,Typography } from '@material-ui/core';
import image2b from './2b.png';
import {useSpring,config,animated} from 'react-spring'
// import {useSprings} from 'react-spring'
import { useGesture } from 'react-use-gesture'

const Random = ({setSelected}) => {
    const classes = useStyles();
    useEffect(()=>{
        setSelected("Image Display");
    },[setSelected])

    const props = useSpring({
        to: {x:0},from: {x:500},
    })
    const props_ = useSpring({
        to: {x:0},from: {x:-500},
    })

    const props_text = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 1000,
        config: config.molasses,})

    return (
        <div className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container 
                justify="center" 
                direction="row"
                spacing={1}
                className={classes.grid}>
        
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Grid container spacing={3} direction="column">
                    <Grid xs={12} item={true}>
                    <animated.div style={props_}>
                    <Card className={classes.card}>
                    <CardMedia component="img" image={image2b} 
                        title="2b"/>
                    <CardContent>
                    <animated.h2 style={props_text}>2b</animated.h2>
                    </CardContent>
                    </Card>
                    </animated.div>
                    </Grid>
                    
                    <Grid xs={12} item={true}>
                    <animated.div style={props}>
                    <Card className={classes.card}>
                    <CardMedia component="img" image="https://zcemycl.github.io/resources/eediagram.png"
                        title="2b"/>
                    <CardContent><Typography variant="h5">
                    Image Display
                    </Typography></CardContent>
                    </Card>
                    </animated.div>
                    </Grid>

                    <Grid xs={12} item={true}>
                    <animated.div style={props}>
                    <Card className={classes.card}>
                    <CardMedia component="img" image="https://raw.githubusercontent.com/zcemycl/TF2DeepFloorplan/main/resources/epoch60.png"
                        title="2b"/>
                    <CardContent><Typography variant="h5">
                    Image Display
                    </Typography></CardContent>
                    </Card>
                    </animated.div>
                    </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} xs={12} sm={6} md={4} lg={3}>
                    <Grid container spacing={3} direction="column">
                    <Grid xs={12} item={true}>
                    <animated.div style={props_}>
                    <Card className={classes.card}>
                    <CardMedia component="img" image={image2b} 
                        title="2b"/>
                    <CardContent><Typography variant="h5">
                    Image Display
                    </Typography></CardContent>
                    </Card>
                    </animated.div>
                    </Grid>
                    
                    <Grid xs={12} item={true}>
                    <animated.div style={props}>
                    <Card className={classes.card}>
                    <CardMedia component="img" image="https://zcemycl.github.io/resources/eediagram.png"
                        title="2b"/>
                    <CardContent><Typography variant="h5">
                    Image Display
                    </Typography></CardContent>
                    </Card>
                    </animated.div>
                    </Grid>

                    <Grid xs={12} item={true}>
                    <animated.div style={props}>
                    <Card className={classes.card}>
                    <CardMedia component="img" image="https://raw.githubusercontent.com/zcemycl/TF2DeepFloorplan/main/resources/epoch60.png"
                        title="2b"/>
                    <CardContent><Typography variant="h5">
                    Image Display
                    </Typography></CardContent>
                    </Card>
                    </animated.div>
                    </Grid>
                    </Grid>
                </Grid>

            </Grid>
        
            
            
        </div>
    )
}

export default Random
