import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles';
import { Grid, Card, CardMedia, CardContent } from '@material-ui/core';
import image2b from './2b.png';

const Random = () => {
    const classes = useStyles();
    return (
        <div className={classes.content} style={{position:'relative'}}>
            <Grid container 
                justify="center" 
                direction="row"
                spacing={0}
                style={{padding: '15vh 0 0 0'}}>
                <Grid xs={12} sm={6} md={4} lg={3}>
                    <Card style={{maxWidth:'100%',
                        height: '100%', 
                        textAlign: 'center'}}>
                    <CardMedia component="img" image={image2b} 
                        title="2b"></CardMedia>
                    <CardContent><Typography variant="h5" alignItems='center'>
                    Random Testing
                    </Typography></CardContent>
                    
                    </Card>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Random
