import React from 'react';
import useStyles from './styles';
import { Grid, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import image2b from './2b.png';

const Random = () => {
    const classes = useStyles();
    return (
        <div className={classes.content}>
            <Grid container 
                justify="center" 
                direction="row"
                spacing={0}
                className={classes.grid}>
                <Grid xs={12} sm={6} md={4} lg={3}>
                    <Card className={classes.card}>
                    <CardMedia component="img" image={image2b} 
                        title="2b"></CardMedia>
                    <CardContent><Typography variant="h5">
                    Image Display
                    </Typography></CardContent>
                    
                    </Card>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Random
