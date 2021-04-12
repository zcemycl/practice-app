import React, { useState } from "react";
import useStyles from './styles';
import { Bar } from 'react-chartjs-2'; 
import { Slider } from "@material-ui/core";
import { Card, CardContent } from '@material-ui/core';

const UIPlot = () => {
    const classes = useStyles();
    const updateRange=(e,data)=>{
        setVal(data)
    }
    const marks = [{value:0,label:'0'},
                    {value:5,label:'5'},
                    {value:20,label:'20'}]
    const [val,setVal] = useState(5);
    return (
        <Card style={{maxWidth:'100%', height: '100%'}}>   
            <Bar 
                data={{
                    labels: ['Red','Blue','Yellow','Green','Purple','Orange'],
                    datasets: [{
                        label: '# of votes',
                        data: [val,10,3,5,2,3],
                        backgroundColor: "rgba(137, 196, 244, 1)",
                    },
                    ],
                }}
                height={'35%'}
                width={'35%'}
            />
            
            <CardContent style={{display:'flex'}}>
                <Slider value={val} onChange={updateRange}
                    valueLabelDisplay="auto" min={0}
                    max={20}
                    marks={marks}/>
                {/* <br></br>
                <Typography>
                    Slider + Chart testing
                </Typography> */}
            </CardContent>
        </Card>
    )
}

export default UIPlot
