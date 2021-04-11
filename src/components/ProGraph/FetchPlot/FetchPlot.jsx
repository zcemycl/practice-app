import React,{ useState,useEffect } from "react";
import useStyles from './styles';
import { Bar } from 'react-chartjs-2'; 
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';

const FetchPlot = () => {
    const [arr,setArr] = useState([]);
    const classes = useStyles();
    
    useEffect(() => {
        fetch('https://hidden-dusk-28735.herokuapp.com/')
                .then(res=>res.json())
                .then(json=>{
                  setArr(json.data)
                })
    },[]);
    
    return (
        <Card style={{maxWidth:'100%', height: '100%'}}>
            
            <Bar
                data={{
                    labels: ['Jan','Feb','Mar','Apr','May','Jun'],
                    datasets: [{
                        label: '# of votes',
                        data: arr,
                        backgroundColor: 'rgba(0, 181, 204, 1) '
                    },
                    ],
                }}
                height={'35%'}
                width={'35%'}
            />
            <CardContent style={{display:'flex'}}>
            {/* <Typography>
                Data import from 
                <a href="https://hidden-dusk-28735.herokuapp.com/" target="_blank">
                 https://hidden-dusk-28735.herokuapp.com/
                </a>
            </Typography> */}
            </CardContent>
        </Card>
    )
}

export default FetchPlot
