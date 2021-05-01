import React from 'react';
import useStyles from './styles';
import { Grid,Card,CardContent,Typography,Divider } from '@material-ui/core';
import { Provider,LikeButton,ClapButton,UpdownButton } from '@lyket/react';

const CommentLike = () => {
    const classes = useStyles();
    return (
        <div className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container 
            justify="center" 
            direction="row"
            spacing={0}
            className={classes.grid}>
            <Grid xs={12} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                <Provider apiKey={process.env.REACT_APP_LYKET_API_TOKEN}>
                    <CardContent className={classes.cardcontent}>
                        <Typography variant="h6">
                            Like Button
                        </Typography>
                        <LikeButton id="how-to-like" namespace="post"
                            component={LikeButton.templates.Twitter}/>
                    </CardContent>
                    <CardContent className={classes.cardcontent}>
                        <Typography variant="h6">
                            Clap Button
                        </Typography>
                        <ClapButton id="how-to-clap" namespace="post"
                            component={ClapButton.templates.Heart}/>
                    </CardContent>
                    <CardContent>
                        <Typography variant="h6">
                            UpDownVote Buttons
                        </Typography>
                        <UpdownButton namespace="my-documentation"
                            id="like-dislike-buttons-api"
                            component={UpdownButton.templates.Chevron}/>
                    </CardContent>
                    <Divider light /> 
                </Provider>
                
                </Card>
            </Grid>
        </Grid>
            
        </div>

    )
}

export default CommentLike
