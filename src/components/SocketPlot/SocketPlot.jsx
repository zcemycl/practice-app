import React,{ useState,useEffect } from "react";
import io from 'socket.io-client';
// import { Line } from 'react-chartjs-2'; 

import {Line,LineChart,XAxis,YAxis,Tooltip,CartesianGrid,ResponsiveContainer} from 'recharts';
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
        <Card style={{maxWidth:'95%', maxHeight: '100%'}}>
            <ResponsiveContainer width='95%'  aspect={2}>
                <LineChart 
                    data={arr}>
                    <Line type="monotone" 
                    dataKey="uv" 
                    stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>

            
            <CardContent style={{display:'flex'}}>
            <Typography>
                Data import from 
                <a href="https://hidden-dusk-28735.herokuapp.com/getrealtimedata" target="_blank">
                    https://hidden-dusk-28735.herokuapp.com/getrealtimedata
                    </a>
            </Typography>
            </CardContent>
        </Card>

    )
}

export default SocketPlot
