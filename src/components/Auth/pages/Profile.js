import React from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import useStyles from './styles';

const Profile = () => {
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
                        <CardContent><Typography variant="h5" alignItems='center'>
                        Profile many Profile
                        </Typography></CardContent>
                    </Card>
                </Grid>
            </Grid>
            </div>
    )
}

export default withRouter(Profile);
