import React,{Component} from 'react';
import { Grid,Card,CardContent,Typography } from '@material-ui/core';
import { Provider,LikeButton,ClapButton,UpdownButton } from '@lyket/react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import axios from 'axios';
import publicIp from 'public-ip'
import './styles.css';

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
  },
  card: {
    maxWidth:'100%',
    textAlign: 'center',
    overflow: 'hidden',
  },
  cardcontent: {
    paddingBottom: theme.spacing(3),
    // marginBottom: theme.spacing(-3),
  },
  margin: {
    padding: theme.spacing(2),
  },
});

class CommentLike extends Component {
    constructor(props) {
        super(props);
        this.state = {data:[],send:{Username:"",Comment:"",Timestamp:"",IP:null}}
        this.sheeturi = 'https://sheet.best/api/sheets/82c23d79-9535-4ef8-9970-f59acfed6f0a'
        props.setSelected("Like Comment")
    }

    submitHandler = e => {
      e.preventDefault();
      if (this.state.send.Username && this.state.send.Comment){
        const newData = this.state.data.concat(this.state.send)
        this.setState({data:newData})
        axios.post(this.sheeturi,this.state.send)
        .then(response => {
          console.log(response);
        })
      }
      const tmpSend = this.state.send;
      this.setState({send:{...tmpSend,Comment:""}})
    }

    getIP = async () => {
      const ip = await publicIp.v4({fallbackUrls:["https://ifconfig.co/ip"]});
      this.setState({send:{IP:ip}})
    }

    componentDidMount() {
      let currentTimestamp = Date.now()
      let date = new Intl.DateTimeFormat('en-US',
          {year:'numeric',month:'2-digit',day:'2-digit',
          hour:'2-digit',minute:'2-digit',second:'2-digit'})
          .format(currentTimestamp)
      this.getIP();
      this.setState({send:{Timestamp:date}});

      axios.get(this.sheeturi)
        .then(res=>{
          this.setState({data:res.data})
        })

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
            <Grid xs={12} sm={10} md={8} lg={6} item={true}>
                <Card className={classes.card}>
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

                </Card>
                <div className={classes.content} 
                  style={{textAlign:'left'}}>
                <Comment.Group>
                  <Header as='h3' dividing>
                    Comments
                  </Header>
          
                  {this.state.data
                    .filter(data => data.Username && data.Comment)
                    .map((data,index) => {
                    if (data.Username && data.Comment){
                      return <Comment key={index}>
                          <Comment.Content>
                            <Comment.Author as='a'>{data.Username}</Comment.Author>
                            <Comment.Metadata>
                              <div>{data.Timestamp}</div>
                            </Comment.Metadata>
                            <Comment.Text>{data.Comment}</Comment.Text>
                          </Comment.Content>
                        </Comment>
                    }
                    return <></>
                  })}
                  <Form reply>
                  <Form.Field>
                    <input placeholder='Username' 
                      onChange={(e)=>{
                        const tmpSend = this.state.send;
                        this.setState({send:{...tmpSend,Username:e.target.value}})
                      }}/>
                  </Form.Field>
                    <Form.TextArea 
                      placeholder='Kindly leave your thoughts below'
                      value={this.state.send.Comment}
                      onChange={(e)=>{
                        const tmpSend = this.state.send;
                        this.setState({send:{...tmpSend,Comment:e.target.value}})
                      }}/>
                    <Button content='Add Comment' 
                      labelPosition='left' icon='edit' primary 
                      onClick={this.submitHandler}/>
                  </Form>
                </Comment.Group>
                </div>
            </Grid>
        </Grid>
            
        </div>

    )
}}

export default withStyles(useStyles)(CommentLike);
