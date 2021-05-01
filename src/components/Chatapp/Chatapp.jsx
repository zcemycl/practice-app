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
    const socketRef = useRef();
    socketRef.current = socketIOClient(site,{reconnection: true});
    useEffect(() => {
        if (socketRef.current.id === undefined){
            socketRef.current = socketIOClient(site,{reconnection: true});
        }
        socketRef.current.on('my_response', (message) => {
            console.log('receiving...');
            console.log(socketRef.current.id);
            console.log(message.senderId);
            const newmessage = {
                ...message,
                same: socketRef.current.id===message.senderId};
            
            setArr((currentArr)=>[...currentArr,newmessage])
        });
    },[]);

    const sendMsg = () => {
        console.log('sending...');
        if (socketRef.current.id === undefined){
            socketRef.current = socketIOClient(site,{reconnection: true});
        }
        console.log(valueText.current.value);
        console.log(valueUser.current.value);
        console.log(socketRef.current.id);
        socketRef.current.emit('my_event', {
            body: valueText.current.value,
            user: valueUser.current.value,
            senderId: socketRef.current.id,
          });
        valueText.current.value = "";
    }

    return (
        <div className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container 
                justify="center" 
                direction="row"
                spacing={0}
                className={classes.grid}>
            <Grid xs={12} sm={8} md={6} lg={4}>
                <Card className={classes.card}>
                    <CardContent class={classes.message_holder}>
                    <Typography variant="h5" 
                        style={{padding:'0 0 5%'}}>
                    Chatapp
                    </Typography>
                    <Divider />
                    <div style={{padding:'5% 0 0'}}>
                    
                    <Message target="other" name="Admin" msg="I am Leo."/>
                    <Message target="other" name="Admin" msg="Feel free to share this link, and start chatting. The record won't be stored."/>

                    {arr.map((item)=>{
                        return <Message target={item.same ? "me":"other"} 
                            name={item.user+' '+item.senderId.substring(0,6)}
                            msg={item.body}/>
                    })}
                    </div>
                    
                    </CardContent >
                    
                    <form className={classes.form}>
                        <Divider style={{marginBottom:'1%'}}/>
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
