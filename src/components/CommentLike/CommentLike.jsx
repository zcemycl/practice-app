import React,{Component} from 'react';
import { Grid,Card,CardContent,Typography,Divider } from '@material-ui/core';
import { Provider,LikeButton,ClapButton,UpdownButton } from '@lyket/react';
import { withStyles } from '@material-ui/core/styles';
require('./ably');


const useStyles = theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    position: 'relative',
  },
  root: {
    flexGrow: 1,
  },
  grid: {
    height: '70vh',
  },
  card: {
    maxWidth:'100%',
    height: '100%', 
    textAlign: 'center',
  },
  cardcontent: {
    paddingBottom: theme.spacing(0),
    marginBottom: theme.spacing(-3),
  },
});

class CommentLike extends Component {
    constructor(props) {
        super(props);
        this.state = {comments: []}
    }
    
    render() {
        const { classes } = this.props;
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
}}

export default withStyles(useStyles)(CommentLike);
