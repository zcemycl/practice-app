import React,{ useState,useEffect } from "react";
import io from 'socket.io-client';
import {Area,AreaChart,XAxis,YAxis,Tooltip,CartesianGrid,ResponsiveContainer} from 'recharts';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';

const SocketPlot = () => {
    const [arr,setArr] = useState([]);
    const socket = io.connect('https://hidden-dusk-28735.herokuapp.com/test',{reconnection: true});
    //const socket = io.connect('http://127.0.0.1:5000/test',{reconnection: true});
    //const socket = io.connect('http://127.0.0.1:5000/test');
     useEffect(() => {
        socket.on('newnumber',(msg)=>{
            setArr((currentData) => {
            if (currentData.length >= 10){
                currentData.shift();
            }
            
            return [...currentData,{'uv':msg.number}]});
        })
     },[]);
    return (
        <Card style={{maxWidth:'100%', height: '100%'}}>
            <ResponsiveContainer width='95%'  aspect={0.95}>
                
                <AreaChart 
                    data={arr}>
                    <Area type="monotone" 
                        dataKey="uv" 
                        stroke="#8884d8" 
                        fill="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis fontSize="0.8em"/>
                    <YAxis fontSize="0.8em" width={30}/>
                    <Tooltip />
                </AreaChart>
            </ResponsiveContainer>

            
            {/* <CardContent style={{display:'flex'}}>
            <Typography>
                Data import from 
                <a href="https://hidden-dusk-28735.herokuapp.com/getrealtimedata" target="_blank">
                    https://hidden-dusk-28735.herokuapp.com/getrealtimedata
                    </a>
            </Typography>
            </CardContent> */}
        </Card>

    )
}

export default SocketPlot
