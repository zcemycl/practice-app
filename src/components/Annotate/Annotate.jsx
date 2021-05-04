import React from 'react';
import useStyles from './styles';
import { Grid, Card } from '@material-ui/core';

const Annotate = () => {
    const classes = useStyles();
    return (
        <div className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container 
            justify="center" 
            direction="row"
            spacing={0}
            className={classes.grid}>
            <Grid xs={12} sm={10} md={8} lg={6}>
                <Card className={classes.card}>

                
                </Card>
            </Grid>
        </Grid>
            
        </div>

    )
}

export default Annotate