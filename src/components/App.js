import React,{ useState,useEffect } from "react";
import { Bar } from 'react-chartjs-2'; 
import { Slider } from "@material-ui/core";
import io from 'socket.io-client';

const App = () => {
    const [val,setVal] = useState(12)
    const updateRange=(e,data)=>{
        setVal(data)
    }
    const [arr,setArr] = useState([])
    const [arr2,setArr2] = useState([0,0,0,0,0,0])
    var tmparr2 = arr2;
    const socket = io.connect('https://hidden-dusk-28735.herokuapp.com/test',
            {reconnection: true, 
            //transports: ['websocket']
    });

    socket.on('newnumber',(msg)=>{
        console.log(msg.number);
        //tmparr2 = arr2;
        //if (tmparr2.length>=6){
        //    tmparr2.shift()
        //}
        //tmparr2.push(msg.number);
        //setArr2(tmparr2)
        //console.log(tmparr2);
    })

    useEffect(() => {
      fetch('https://hidden-dusk-28735.herokuapp.com/')
              .then(res=>res.json())
              .then(json=>{
                setArr(json.data)
              })
    },[])

    console.log(arr)
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
        <p>Data import from <a href="https://hidden-dusk-28735.herokuapp.com/">https://hidden-dusk-28735.herokuapp.com/</a></p>
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

        </div>)
}

export default App
