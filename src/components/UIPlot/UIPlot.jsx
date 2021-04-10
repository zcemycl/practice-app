import React, { useState } from "react";
import useStyles from './styles';
import { Bar } from 'react-chartjs-2'; 
import { Slider } from "@material-ui/core";

const UIPlot = () => {
    const classes = useStyles();
    const updateRange=(e,data)=>{
        setVal(data)
    }
    const [val,setVal] = useState(12);
    return (
        <div>
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
        </div>
    )
}

export default UIPlot
