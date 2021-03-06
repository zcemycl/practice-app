import React, {useEffect} from 'react';
import useStyles from './styles';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import {assign} from '../../actions';
import {useDispatch} from 'react-redux';

const NotFound = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(assign("Not Found"));
    },[dispatch])
    return (
        <div className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container 
                justify="center" 
                direction="row"
                spacing={0}
                className={classes.grid}>
                <Grid xs={12} sm={6} md={4} lg={3} item={true}>
                    <Card className={classes.card}>
                    <CardContent><Typography variant="h4">
                    404 Not Found
                    </Typography></CardContent>
                    
                    </Card>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default NotFound
