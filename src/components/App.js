import React,{ useState,useEffect } from "react";
import { Bar } from 'react-chartjs-2'; 
import { Slider } from "@material-ui/core";
import io from 'socket.io-client';
import {Line,LineChart,XAxis,YAxis,Tooltip,CartesianGrid} from 'recharts';

const App = () => {
    const [val,setVal] = useState(12)
    const updateRange=(e,data)=>{
        setVal(data)
    }
    const [arr,setArr] = useState([])
    const [arr2,setArr2] = useState([])
    const socket = io.connect('https://hidden-dusk-28735.herokuapp.com/test',
            {reconnection: true, 
            //transports: ['websocket']
    });

    useEffect(() => {
      socket.on('newnumber',(msg)=>{
          //console.log(msg.number);
          setArr2((currentData) => {
            if (currentData.length >= 15){
                currentData.shift();
            }
            
            return [...currentData,{'uv':msg.number}]});
      })
      //console.log(arr2);
    },[])


    useEffect(() => {
      fetch('https://hidden-dusk-28735.herokuapp.com/')
              .then(res=>res.json())
              .then(json=>{
                setArr(json.data)
              })
    },[])

    //console.log(arr)
    return (<div>
        <ul>
        <li>Hello Leo.</li>
        </ul>

        <p>Slider + Chart testing</p>
        <div style={{height:"20vh"}}>
        <Bar 
            data={{
                labels: ['Red','Blue','Yellow','Green','Purple','Orange'],
                datasets: [{
                    label: '# of votes',
                    data: [val,19,3,5,2,3],
                    backgroundColor: ['red','blue','yellow','green','purple','orange']
                },
                ],
            }}
            height={400}
            width={600}
            options={{maintainAspectRatio: false,}}
        />
        <div style={{textAlign:"center",width:"70vw"}}>
        <Slider value={val} onChange={updateRange}/>
        </div>
        </div>
        <br></br>
        <p>Data import from <a href="https://hidden-dusk-28735.herokuapp.com/" target="_blank">https://hidden-dusk-28735.herokuapp.com/</a></p>
        <div style={{height:"20vh"}}>
        <Bar
            data={{
                labels: ['Red','Blue','Yellow','Green','Purple','Orange'],
                datasets: [{
                    label: '# of votes',
                    data: arr,
                    backgroundColor: ['red','blue','yellow','green','purple','orange']
                },
                ],
            }}
            height={200}
            width={600}
            options={{maintainAspectRatio: false,}}
        />
        </div>

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

        </div>)
}

export default App
