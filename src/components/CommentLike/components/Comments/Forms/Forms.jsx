import React, {useState,useEffect} from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import publicIp from 'public-ip'

const Forms = ({data,setData}) => {
    const [send,setSend] = useState({Username:"",
            Comment:"",Timestamp:"",IP:null})
    const sheeturi = 'https://sheet.best/api/sheets/82c23d79-9535-4ef8-9970-f59acfed6f0a'
    
    const submitHandler = e => {
        e.preventDefault();
        if (send.Username && send.Comment){
            const newData = data.concat(send)
            setData(newData)
            axios.post(sheeturi,send)
                .then(response => {
                // console.log(response);
                })
        }
        const tmpSend = {...send};
        setSend({...tmpSend,Comment:""})
    }
    
    useEffect(() => {
        const getIP = async () => {
            const ip = await publicIp.v4({
                fallbackUrls:["https://ifconfig.co/ip"]});
            setSend(prev=>{return {...prev,IP:ip}})
        }
        let currentTimestamp = Date.now()
        let date = new Intl.DateTimeFormat('en-US',
            {year:'numeric',month:'2-digit',day:'2-digit',
            hour:'2-digit',minute:'2-digit',second:'2-digit'})
            .format(currentTimestamp)
        getIP();
        setSend(prev=>{return {...prev,Timestamp:date}})
    },[])

    return (
        <>
        <Form reply>
            <Form.Field>
            <input placeholder='Username' 
                onChange={(e)=>{
                const tmpSend = send;
                setSend({...tmpSend,Username:e.target.value})
                }}/>
            </Form.Field>
            <Form.TextArea 
                placeholder='Kindly leave your thoughts below'
                value={send.Comment}
                onChange={(e)=>{
                const tmpSend = send;
                setSend({...tmpSend,Comment:e.target.value})
                }}/>
            <Button content='Add Comment' 
                labelPosition='left' icon='edit' primary 
                onClick={submitHandler}/>
        </Form>   
        </>
    )
}

export default Forms

