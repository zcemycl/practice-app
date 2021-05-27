import React from 'react'
import { Grid,CardContent,Typography } from '@material-ui/core';
import { Provider,LikeButton,ClapButton,UpdownButton } from '@lyket/react';
import useStyles from './styles';

const Like = () => {
    const classes = useStyles();
    return (
        <>
        <Provider apiKey={process.env.REACT_APP_LYKET_API_TOKEN}>
        <CardContent className={classes.cardcontent}>
        <Grid container 
            justify="center" 
            direction="row"
            spacing={0}>
            <Grid xs={4} sm={2} md={2} lg={2} item={true}>
            <Typography variant="h6">
                Like
            </Typography>
            <LikeButton id="how-to-like" namespace="post"
                component={LikeButton.templates.Twitter}/>
            </Grid>
            <Grid xs={4} sm={2} md={2} lg={2} item={true}>
            <Typography variant="h6">
                Clap
            </Typography>
            <ClapButton id="how-to-clap" namespace="post"
                component={ClapButton.templates.Heart}/>
            </Grid>
            <Grid xs={12} sm={4} md={4} lg={4} item={true}>
            <Typography variant="h6">
                UpDownVote
            </Typography>
            <UpdownButton namespace="my-documentation"
                id="like-dislike-buttons-api"
                component={UpdownButton.templates.Chevron}/>
            </Grid>
            </Grid>
        </CardContent>
        </Provider>
        </>
    )
}

export default Like
