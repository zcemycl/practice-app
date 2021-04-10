import React,{ useState,useEffect } from "react";
import io from 'socket.io-client';
import {Line,LineChart,XAxis,YAxis,Tooltip,CartesianGrid} from 'recharts';

const SocketPlot = () => {
    const [arr2,setArr2] = useState([]);
    const socket = io.connect('https://hidden-dusk-28735.herokuapp.com/test',{reconnection: true});
    //const socket = io.connect('http://127.0.0.1:5000/test',{reconnection: true});
    //const socket = io.connect('http://127.0.0.1:5000/test');
     useEffect(() => {
        socket.on('newnumber',(msg)=>{
            setArr2((currentData) => {
            if (currentData.length >= 15){
                currentData.shift();
            }
            
            return [...currentData,{'uv':msg.number}]});
        })
     },[]);
    return (
        <div>
            <p>Data import from <a href="https://hidden-dusk-28735.herokuapp.com/getrealtimedata" target="_blank">https://hidden-dusk-28735.herokuapp.com/getrealtimedata</a></p>
            <div style={{height:"20vh",width:"80vw"}}>
            <LineChart width={600} height={200} data={arr2.slice(Math.max(arr2.length-10,0))}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis />
                <YAxis />
                <Tooltip />
            </LineChart>
            </div>
        </div>
    )
}

export default SocketPlot
