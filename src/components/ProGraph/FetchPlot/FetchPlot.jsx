import React,{ useState,useEffect } from "react";
import useStyles from './styles';
import { Bar } from 'react-chartjs-2'; 
import { Card } from '@material-ui/core';

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
        <Card className={classes.card}>
            <Bar
                className={classes.bar}
                data={{
                    labels: ['Jan','Feb','Mar','Apr','May','Jun'],
                    datasets: [{
                        label: '# of votes',
                        data: arr,
                        backgroundColor: 'rgba(0, 181, 204, 1) '
                    },
                    ],
                }}
                height={null}
                width={null}
                options={{
                    aspectRatio: 1, 
                }}
            />
        </Card>
    )
}

export default FetchPlot
