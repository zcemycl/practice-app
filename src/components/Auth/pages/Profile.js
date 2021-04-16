import React from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import useStyles from './styles';

const Profile = () => {
    const classes = useStyles();
    return (
        <div className={classes.content} >
            <Grid container 
                justify="center" 
                direction="row"
                spacing={0}
                className={classes.grid}>
                <Grid xs={12} sm={6} md={4} lg={3}>
                    <Card className={classes.card}>
                        <CardContent><Typography variant="h5">
                        Profile many Profile
                        </Typography></CardContent>
                    </Card>
                </Grid>
            </Grid>
            </div>
    )
}

export default withRouter(Profile);
