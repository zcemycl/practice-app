import React, { useState } from "react";
import useStyles from './styles';
import { Bar } from 'react-chartjs-2'; 
import { Slider } from "@material-ui/core";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';

const UIPlot = () => {
    const classes = useStyles();
    const updateRange=(e,data)=>{
        setVal(data)
    }
    const [val,setVal] = useState(5);
    return (
        <Card style={{maxWidth:'95%', maxHeight: '100%'}}>   
            <Bar 
                data={{
                    labels: ['Red','Blue','Yellow','Green','Purple','Orange'],
                    datasets: [{
                        label: '# of votes',
                        data: [val,10,3,5,2,3],
                        backgroundColor: ['red','blue','yellow','green','purple','orange']
                    },
                    ],
                }}
                height={'35%'}
                width={'35%'}
            />
            
            <CardContent style={{display:'flex'}}>
                <Slider value={val} onChange={updateRange}/>
                {/* <div>
                    <Typography>
                        Slider + Chart testing
                    </Typography>
                </div> */}
                
            </CardContent>
        </Card>
    )
}

export default UIPlot
