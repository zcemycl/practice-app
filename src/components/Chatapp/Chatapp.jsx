import React, {useState,useEffect,useRef} from 'react';
import useStyles from './styles';
import { Grid, Card, CardContent, Typography, Box } from '@material-ui/core';
import socketIOClient from 'socket.io-client';
// import io from 'socket.io-client';
import Message from './Message';



const Chatapp = () => {
    const classes = useStyles();
    const [arr,setArr] = useState([]);
    const site = 'https://hidden-dusk-28735.herokuapp.com';
    // const site = 'https://hidden-dusk-28735.herokuapp.com/session';
    // const socket = io.connect(site,{reconnection: true});
    const socketRef = useRef();
    const listMsgs = null;
    useEffect(() => {
        // socket.on('my_response',(msg)=>{
        //     console.log(msg);
        //     // console.log(msg.user_name);
        //     setArr((currentData) => [...currentData,
        //         msg]);
        //     // setCont((currentData) => {
        //     //     return [...currentData,{'uv':msg.message}]});
        //     // console.log(arr);
        // })
        socketRef.current = socketIOClient(site);
        socketRef.current.on('my_response', (message) => {
            console.log(socketRef.current.id);
            console.log(message);
          });
    },[]);
    
    return (
        <div className={classes.content}>
            <Grid container 
                justify="center" 
                direction="row"
                spacing={0}
                className={classes.grid}>
            <Grid xs={12} sm={8} md={6} lg={4}>
                <Card className={classes.card}>
                    <CardContent class={classes.message_holder}>
                    <Typography variant="h5">
                    Chatapp [In Progress]
                    </Typography>

                    <div >
                    
                    <Message target="other" msg="I am Leo"/>
                    <Message target="other" msg="Writing something to expand the lines so that it occupies two rows."/>
                    <Message target="me" msg="Thanks for your message."/>
                    <Message target="me" msg="Bye"/>
                    <Message target="me" msg="Thanks for your message."/>
                    <Message target="me" msg="Bye"/>
                    <Message target="other" msg="Bye"/>
                    <Message target="other" msg="Bye"/>
                    <Message target="other" msg="Bye"/>
                    <Message target="other" msg="Bye"/>
                    {arr.map((item)=>(
                        <Message target="other" msg={item.message}/>
                    ))}
                    </div>
                    {/* <div>{content}</div> */}

                    
                    </CardContent>
                    
                </Card>
            </Grid>
            </Grid>
            
        </div>
    )
}

export default Chatapp
