import React,{ useState,useEffect } from "react";
import io from 'socket.io-client';
import {Area,AreaChart,XAxis,YAxis,Tooltip,CartesianGrid,ResponsiveContainer} from 'recharts';
import { Card } from '@material-ui/core';
import useStyles from './styles';

const SocketPlot = () => {
    const [arr,setArr] = useState([]);
    const updateMsg = (msg) => {
        setArr((currentData) => {
            if (currentData.length >= 10){
                currentData.shift();
            }
        return [...currentData,{'uv':msg.number}]});
    }
    const classes = useStyles();
    //const socket = io.connect('http://127.0.0.1:5000/test',{reconnection: true});
    //const socket = io.connect('http://127.0.0.1:5000/test');
    useEffect(() => {
        const socket = io.connect('https://hidden-dusk-28735.herokuapp.com/test',
            {reconnection: true});
        
        socket.on('newnumber',updateMsg);
        return () => {
            socket.off('newnumber',updateMsg);
        };
    },[]);
    return (
        <Card className={classes.card}>
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
        </Card>

    )
}

export default SocketPlot
