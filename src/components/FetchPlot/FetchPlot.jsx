import React,{ useState,useEffect } from "react";
import useStyles from './styles';
import { Bar } from 'react-chartjs-2'; 

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
        <div>
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
        </div>
    )
}

export default FetchPlot
