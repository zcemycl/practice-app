import React, {useState,useEffect,useRef} from 'react';
import useStyles from './styles';
import { Grid, Card, CardContent, Typography, Divider } from '@material-ui/core';
import { TextField, IconButton } from '@material-ui/core';
import socketIOClient from 'socket.io-client';
import Message from './Message';
import SendIcon from '@material-ui/icons/Send';

const Chatapp = () => {
    const classes = useStyles();
    const [arr,setArr] = useState([]);
    const valueUser = useRef("");
    const valueText = useRef("");
    const site = 'https://hidden-dusk-28735.herokuapp.com';
    // const site = 'https://hidden-dusk-28735.herokuapp.com/session';
    // const socket = io.connect(site,{reconnection: true});
    const socketRef = useRef();
    socketRef.current = socketIOClient(site,{reconnection: true});
    useEffect(() => {
        socketRef.current.on('my_response', (message) => {
            // socketRef.current = socketIOClient(site);
            console.log(socketRef.current.id);
            console.log(message.senderId);
            if (socketRef.current.id===message.senderId){
                message.same = true;
            }
            
            setArr((currentArr)=>[...currentArr,message])
            // if ()
            // setIsSame
          });
    },[console.log(arr)]);

    const sendMsg = () => {
        // console.log(valueText.current.value);
        // console.log(valueUser.current.value);
        socketRef.current.emit('my_event', {
            body: valueText.current.value,
            user: valueUser.current.value,
            senderId: socketRef.current.id,
            same: false,
          });
        valueText.current.value = "";
    }

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
                    <Divider />
                    <div >
                    
                    <Message target="other" msg="I am Leo"/>
                    <Message target="other" msg="Writing something to expand the lines so that it occupies two rows."/>
                    <Message target="me" msg="Thanks for your message."/>
                    <Message target="me" msg="Bye"/>
                    <Message target="me" msg="Thanks for your message."/>
                    <Message target="me" msg="Bye"/>
                    {arr.map(item=>{
                        return (item.same
                        ?<Message target="me" msg={item.user+':'+item.body}/>
                        :<Message target="other" msg={item.user+': '+item.body}/>)
                    })}
                    </div>
                    
                    </CardContent >
                    <Divider />
                    <form className={classes.form}>
                        <TextField id="user" 
                            label="Nickname"
                            variant="outlined"
                            inputRef={valueUser}
                            className={classes.txtfu}/>
                        <TextField id="sendMsg" 
                            label="Send Message ..."
                            variant="outlined"
                            inputRef={valueText}
                            className={classes.txtfm}/>
                        <IconButton className={classes.button}
                            onClick={sendMsg}>
                            <SendIcon/></IconButton>
                    </form>
                    
                </Card>
            </Grid>
            </Grid>
            
        </div>
    )
}

export default Chatapp
